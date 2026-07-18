import type { ContactPayload } from "@/lib/contact";

// Email clients need inline styles + system fonts; design-system hex values
// are inlined here since @theme tokens don't exist in email HTML.
const BRAND_900 = "#1E3A5F";
const BRAND_500 = "#3B82F6";
const NEUTRAL_950 = "#0A0A0A";
const NEUTRAL_600 = "#4B5563";
const NEUTRAL_200 = "#E5E7EB";
const NEUTRAL_50 = "#F9FAFB";

const INTENT_STYLES: Record<
  ContactPayload["intent"],
  { bg: string; fg: string; label: string }
> = {
  project: { bg: "#DBEAFE", fg: "#1D4ED8", label: "PROJECT" },
  job: { bg: "#F0FDF4", fg: "#15803D", label: "JOB" },
  hello: { bg: "#F3F4F6", fg: "#4B5563", label: "HELLO" },
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function inquiryEmailHtml(data: ContactPayload): string {
  const intent = INTENT_STYLES[data.intent];
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const message = escapeHtml(data.message);
  const received = new Date().toISOString();
  const font =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:6px 0;font-size:13px;color:${NEUTRAL_600};width:96px;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;font-size:14px;color:${NEUTRAL_950};">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:${NEUTRAL_50};font-family:${font};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${NEUTRAL_50};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#FFFFFF;border:1px solid ${NEUTRAL_200};border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:${BRAND_900};padding:20px 24px;">
              <span style="font-size:16px;font-weight:600;color:#FFFFFF;">New inquiry — nikolastefancic.me</span>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <span style="display:inline-block;background:${intent.bg};color:${intent.fg};font-size:12px;font-weight:600;letter-spacing:0.5px;padding:4px 12px;border-radius:9999px;">${intent.label}</span>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
                ${row("Name", name)}
                ${row("Email", `<a href="mailto:${email}" style="color:${intent.fg};text-decoration:none;">${email}</a>`)}
                ${row("Language", data.lang.toUpperCase())}
                ${row("Received", received)}
              </table>
              <div style="margin-top:16px;padding:16px;border-left:3px solid ${BRAND_500};background:${NEUTRAL_50};border-radius:0 8px 8px 0;">
                <div style="font-size:14px;line-height:1.6;color:${NEUTRAL_950};white-space:pre-wrap;">${message}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 20px;">
              <span style="font-size:12px;color:${NEUTRAL_600};">Sent from the portfolio contact form &middot; reply goes straight to the lead.</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
