# Current Feature

<!-- Feature Name -->

Phase 4 — Multi-step Contact Form (UI)

## Status

<!-- Not Started|In Progress|Completed -->

In Progress

## Goals

<!-- Goals & requirements -->

**Build Phase 4 — Contact form UI** (per `02 Prototypes/contact-form-flow.md`)

A Typeform-style, one-question-per-screen stepper inside the dark Contact card,
replacing the two static buttons. Bilingual, target completion < 30s.

- **4 steps:** intent (chip cards, auto-advance) → message (textarea, 10–2000) →
  name (2–100) → email (format-validated).
- **Nav/feedback:** 4 progress dots (`aria-label="Step n of 4"`, active = brand-500),
  Back arrow on steps 2–4 (answers preserved), 200ms slide+fade transitions
  (respect `prefers-reduced-motion`), auto-focus each step, `shadow-focus` rings,
  inline errors (icon + text, error-700).
- **Submit states:** sending (spinner), success (green check + "Thanks — I'll reply
  within 48h" + "Send another"), error (retry, answers retained).
- **Spam guards (client side):** hidden honeypot field, `startedAt` timestamp.
- Direct email + GitHub links remain as a smaller secondary row beneath the form.
- All copy (questions, placeholders, buttons, validation, success/error) added to the
  typed dictionary in both EN/HR.

## Notes

<!-- Any extra notes -->

- **Depends on Phase 5:** the form POSTs to `/api/contact`, which doesn't exist yet.
  Until Phase 5, a real submit hits the error state — expected. Client validation,
  step nav, transitions, and states are all fully testable now.
- Payload: `{ intent, message, name, email, lang, honeypot, startedAt }`.
- Uses the existing `useLanguage()` for `lang` + all copy.

## History

<!-- Keep this updated. Earliest to latest -->

### 2026-07-06

- Phase 1 — Scaffold / Foundation: design-system `@theme` tokens, three fonts via
  `next/font`, light-theme body defaults, minimal placeholder page, pinned
  `turbopack.root`, removed boilerplate SVGs. Build + browser verified. Merged to master.
- Phase 2 — Branch A (frame): Nav (sticky scroll-state, section links, static EN/HR
  toggle, CTA), Hero (badge, headline, CTAs, social icons via `react-icons`, code card,
  stat cards, `fadeUp`), Footer. Spacing utilities use the v4 numeric scale (see
  `coding-standards.md`). Build + browser verified. Merged to main.
- Phase 2 — Branch B (body): About, Skills, Projects (logo images + per-project tag
  pills, whole card is a `next/link`), Experience, Contact shell (form deferred to
  Phase 4). Composed into `page.tsx`. Fixed a nested-`<a>` hydration error (inner
  "View →" is now a `<span>`). Build + browser verified. Merged to main.
- Phase 3 — i18n: typed EN/HR dictionary (`lib/i18n.ts`), client `LanguageProvider`
  (localStorage-persisted, EN default, syncs `<html lang>`), `useLanguage()` hook.
  Converted Nav/Hero/About/Skills/Projects/Experience/Contact to client components
  reading `t`; wired the Nav EN/HR toggle. Footer stays server. EN SSR + HR-in-bundle
  verified; no hydration mismatch. Merged to main.
