# Nikola Štefančić — Personal Portfolio

Bilingual (EN/HR) one-page portfolio for Nikola Štefančić, full-stack web developer in Zagreb. It presents who he is, what he builds, and where he's worked — and converts visitor interest into conversations through a low-friction, one-question-at-a-time contact form.

**Live site:** [nikolastefancic.me](https://nikolastefancic.me)

## Features

- **Seven landing sections** — sticky nav, hero with code-card visual and stat cards, about with resume download, six grouped skill stacks, featured projects (Electius, Contracty), three-role experience timeline, dark contact CTA card, footer.
- **Multi-step contact form** — Typeform-style, 4 steps (intent → message → name → email), one question per screen, auto-advancing, progress dots, 200 ms transitions with `prefers-reduced-motion` respected.
- **Bilingual EN/HR** — client-side toggle in the nav, persisted to `localStorage`, EN default. All copy lives in one typed dictionary ([src/lib/i18n.ts](src/lib/i18n.ts)).
- **Contact API** — `POST /api/contact` with zod validation, honeypot + minimum-fill-time spam guards, per-IP rate limiting, and email delivery via Resend with reply-to wired to the sender.
- **Mobile navigation** — hamburger menu below `sm` with dropdown panel, Escape-to-close, 44×44 px touch targets, `aria-expanded`/`aria-controls` wired.
- **Accessibility** — WCAG AA targets: visible focus rings, icon+text errors (never color alone), labeled progress steps.


## License

Personal project — all rights reserved. © 2026 Nikola Štefančić
