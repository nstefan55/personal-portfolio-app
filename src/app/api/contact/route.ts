import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact";

const MIN_FILL_MS = 3000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

// ponytail: in-memory rate limit — per-instance only. Fine for a low-traffic,
// single-region portfolio; move to Upstash/Redis if abuse becomes real.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }
  const data = parsed.data;

  // Spam guards — respond 200 without sending so bots don't learn the rule.
  if (data.honeypot) return NextResponse.json({ ok: true }, { status: 200 });
  if (Date.now() - data.startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email not configured" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO || "nikola.stefancic@gmail.com";
  const from = process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `[Portfolio] ${data.intent} — ${data.name}`,
      text: [
        `Intent: ${data.intent}`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Language: ${data.lang}`,
        `Received: ${new Date().toISOString()}`,
        "",
        data.message,
      ].join("\n"),
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Send failed" }, { status: 500 });
    }
  } catch (err) {
    console.error("Resend threw:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
