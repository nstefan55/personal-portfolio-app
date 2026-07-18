# Business Email — Developer Notes

Branch: `feature/business-email` · Merged: 2026-07-18

## What changed

Contact form mail now sends from the verified domain address
`business@nikolastefancic.me` with a branded HTML template, instead of the
Resend onboarding sender with plain text only.

### New: `src/lib/email-template.ts`

- `inquiryEmailHtml(data)` — branded HTML inquiry email. Table-based layout,
  inline styles, system font stack (email clients ignore external CSS and
  loaded fonts). Design-system colors are inlined as constants (`brand-900`
  header, intent badge in brand/success/neutral tints, neutral text scale).
- `escapeHtml(value)` — all user input (name, email, message) is escaped
  before interpolation into the HTML.
- Intent badge maps `project` / `job` / `hello` to design-system badge colors.

### Changed: `src/app/api/contact/route.ts`

- From address: `RESEND_FROM_ADDRESS` env var, default
  `business@nikolastefancic.me`.
- From display name is the lead's name (`"Jane Doe via nikolastefancic.me
  <business@...>"`), sanitized (`<>"@,;` stripped) so a crafted name can't
  smuggle a different from address into the header.
- `html: inquiryEmailHtml(data)` added to the Resend send; plain-text body
  kept as fallback. `replyTo` remains the lead's email.
- Delivery target unchanged: `CONTACT_TO` → `nikola.stefancic@gmail.com`
  directly (no forwarding hop for form mail).

### Changed: `src/lib/site.ts`

- Public site email is now `business@nikolastefancic.me` (hero/contact/footer
  links and JSON-LD all read from `SITE.email`).

### Copy tweaks: `src/lib/i18n.ts`

- "hello" intent renamed to Networking / Povezivanje with new placeholders.
- Hero stat corrected to "1+ Years building" (EN/HR).

### Misc

- `.env.example` removed (env documented in the setup guide instead).
- New favicon: NŠ logo, cropped so the mark fills the 512×512 frame.
- Version bump to 1.0.1.

## Environment variables

| Var | Default | Purpose |
|---|---|---|
| `RESEND_API_KEY` | — (required) | Resend send key |
| `CONTACT_TO` | `nikola.stefancic@gmail.com` | Where inquiries are delivered |
| `RESEND_FROM_ADDRESS` | `business@nikolastefancic.me` | Verified-domain sender |

## Manual setup (outside the repo)

Per `context/features/business-email-setup-guide.md`:

1. Verify `nikolastefancic.me` in Resend (SPF + DKIM DNS records) so the
   `business@` sender is allowed.
2. Root-domain mail forwarding `business@` → personal Gmail (Resend is
   send-only; use Cloudflare Email Routing / registrar forwarding / ImprovMX
   depending on DNS host).
3. Gmail "Send mail as" via Resend SMTP (`smtp.resend.com`, dedicated API
   key) with a Business signature, so replies come from the alias.
