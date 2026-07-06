# Phase 4 — Multi-step Contact Form (UI)

A Typeform-style, one-question-per-screen stepper inside the dark Contact card
(`02 Prototypes/contact-form-flow.md`). Bilingual; target completion < 30s.

## Files

| File | Change |
|---|---|
| `src/components/sections/ContactForm.tsx` | The stepper (new). |
| `src/components/sections/Contact.tsx` | Renders `<ContactForm />`; email/GitHub moved to a smaller secondary row below. |
| `src/lib/i18n.ts` | `form` block added to the `Dictionary` type + both EN/HR. |

## Flow

4 steps: **intent** (chip cards, auto-advance) → **message** (textarea, 10–2000; Enter
advances, Shift+Enter = newline) → **name** (2–100) → **email** (format check). Progress
dots (`aria-label` "Step n of 4", active = brand-500), Back arrow on steps 2–4 with
answers preserved, 200ms fade transition (reduced-motion respected globally), each
field auto-focused, `shadow-focus` rings, inline errors (`FiAlertCircle` icon + text).

## Submit + states

- On the email step, `submit()` POSTs JSON to `POST /api/contact`:
  `{ intent, message, name, email, lang, honeypot, startedAt }`.
- States: `idle` → `sending` (spinner, button disabled) → `success` (green check +
  `successTitle` + "Send another" reset) or `error` (inline alert, button becomes
  "Try again", answers retained).

## Spam guards (client half)

- **Honeypot:** an `sr-only` text field that must stay empty.
- **`startedAt`:** timestamp stamped on mount; the API rejects sub-3s submissions.

The server-side half (validation, min-time enforcement, IP rate limit, Resend delivery)
lives in **Phase 5** (`/api/contact`). Until that route exists, a real submit lands in
the error state — expected.

## Adding/adjusting copy

All strings live under `t.form` in `src/lib/i18n.ts` (EN + HR). Intent `value`/`emoji`
are language-neutral and defined in `ContactForm.tsx`; only the labels are translated.
