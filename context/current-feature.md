# Current Feature

<!-- Feature Name -->

Phase 5 — Contact API (`POST /api/contact`)

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

<!-- Goals & requirements -->

**Build Phase 5 — Contact API** (per `minimum-viable-product-mvp-spec.md` §3)

The server half of the contact flow — validates, spam-guards, and emails submissions.

- `POST /api/contact` (App Router route handler).
- **Validation:** zod schema for `{ intent, message(10–2000), name(2–100), email,
  lang, honeypot, startedAt }`. Returns 400 on failure.
- **Spam guards:** honeypot must be empty; min-time (reject if completed < 3s);
  IP rate limit (max 5/hour) → 429.
- **Delivery:** Resend → `CONTACT_TO` (default nikola.stefancic@gmail.com).
  Subject `[Portfolio] {intent} — {name}`, reply-to = sender's email.
- **Env:** `RESEND_API_KEY` (required), `CONTACT_TO`, `RESEND_FROM`
  (default `onboarding@resend.dev`).
- Returns 200 / 400 / 429 / 500.

## Notes

<!-- Any extra notes -->

- **Key dependency:** real delivery needs `RESEND_API_KEY` in `.env.local` (and Vercel
  env). User is providing it. Validation/guard responses are testable without it.
- **Rate limit is in-memory** (a `Map` keyed by IP). ponytail: fine for a low-traffic
  single-instance portfolio; on multi-instance/serverless it's per-instance, not global
  — upgrade to Upstash/Redis if abuse becomes real. Documented ceiling.
- Pairs with the Phase 4 form, which already POSTs this exact payload.

## History

<!-- Keep this updated. Earliest to latest -->

### 2026-07-06

- Phase 1 — Scaffold / Foundation: design-system `@theme` tokens, three fonts via
  `next/font`, light-theme body defaults, minimal placeholder page, pinned
  `turbopack.root`, removed boilerplate SVGs. Build + browser verified. Merged to master.
- Phase 2 — Branch A (frame): Nav, Hero, Footer. v4 numeric spacing scale established.
  Merged to main.
- Phase 2 — Branch B (body): About, Skills, Projects, Experience, Contact shell.
  Nested-`<a>` fix. Merged to main.
- Phase 3 — i18n: typed EN/HR dictionary, `LanguageProvider`, `useLanguage()`; sections
  converted to client components; Nav toggle wired. Merged to main.
- Phase 4 — Contact form UI: `ContactForm` stepper + `form` dictionary block; email/
  GitHub secondary row. Merged to main. Backfilled `/documentation` for Phases 2–4.
- Phase 5 — Contact API: `POST /api/contact` (`route.ts`) with zod schema (`lib/contact.ts`),
  honeypot + min-time silent-drop, in-memory 5/hour IP rate limit, Resend delivery
  (reply-to = sender). `.env.example` added; secrets in `.env` (gitignored). Guards
  verified via curl (400/429/500/silent-200); real delivery confirmed by user. Also
  added a CMS & Builders skill group (EN/HR). Merged to main.
