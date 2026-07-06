# Phase 5 — Contact API (`POST /api/contact`)

The server half of the contact flow: validates, spam-guards, and emails submissions.
Pairs with the Phase 4 form, which already POSTs this payload.

## Files

| File | Role |
|---|---|
| `src/app/api/contact/route.ts` | Route handler (Node runtime). |
| `src/lib/contact.ts` | zod schema + `ContactPayload` type. |
| `.env.example` | Documents required env vars (committed; real values go in `.env`/`.env.local`). |

## Request → response

`POST /api/contact` with JSON:
`{ intent, message, name, email, lang, honeypot, startedAt }`.

| Outcome | Status |
|---|---|
| Sent OK | 200 |
| Invalid JSON / zod validation fail | 400 |
| Honeypot filled or completed < 3s | 200 (silent drop — no email, doesn't tip bots) |
| > 5 requests/hour from one IP | 429 |
| Missing key / Resend error | 500 |

## Spam guards

- **Honeypot:** any non-empty `honeypot` → silent 200.
- **Min-time:** `Date.now() - startedAt < 3000ms` → silent 200.
- **Rate limit:** in-memory `Map<ip, timestamps[]>`, 5 per rolling hour → 429.
  IP from `x-forwarded-for`.

> ⚠️ The rate limit is **in-memory / per-instance**. Fine for a low-traffic,
> single-region portfolio; on multi-instance serverless it isn't global. Swap for
> Upstash/Redis if abuse becomes real.

## Email (Resend)

- To: `CONTACT_TO` (default `nikola.stefancic@gmail.com`).
- From: `RESEND_FROM` (default `Portfolio <onboarding@resend.dev>`).
- Reply-To: the sender's email. Subject: `[Portfolio] {intent} — {name}`.

## Env vars

| Var | Required | Default |
|---|---|---|
| `RESEND_API_KEY` | yes | — |
| `CONTACT_TO` | no | `nikola.stefancic@gmail.com` |
| `RESEND_FROM` | no | `Portfolio <onboarding@resend.dev>` |

**Free-tier note:** without a verified domain, Resend only delivers to the email the
Resend account was registered with. Set these in Vercel project env for production.
