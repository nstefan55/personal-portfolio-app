# Project Overview — Portfolio App

## What It Is

A bilingual (EN/HR) one-page personal portfolio for Nikola Štefančić, full-stack web developer in Zagreb. It presents who he is, what he builds, and where he's worked — and converts visitor interest into conversations through a low-friction, one-question-at-a-time contact form.

## Why It Exists

Nikola's professional presence is fragmented across GitHub, LinkedIn, and resume PDFs. The portfolio is the single hub that ties it together for three audiences: recruiters (30-second scan, resume download), potential clients (proof of work, easy inquiry), and fellow developers (stack and project depth).

## What It Offers

- **Approved design, built for real:** the Claude Design prototype (`01 System Design/portfolio-website-template/project/Portfolio.dc.html`) recreated pixel-faithfully in Next.js 16 / React 19 / Tailwind v4.
- **Seven sections:** hero with code-card visual and stats, about with resume download, six skill groups, two featured projects (Electious, Contracty), three-role experience timeline, contact CTA, footer.
- **Smart contact form:** 4 steps, one question per screen (intent → message → name → email), auto-advancing, bilingual, spam-guarded, delivered straight to Gmail with reply-to wired up.
- **EN/HR toggle:** client-side, persisted, EN default — serving both international and Croatian audiences.

## How It's Built

Next.js 16 App Router on Vercel. TypeScript throughout. Tailwind v4 CSS-first tokens ported from the design system spec. One API route (`/api/contact`) using zod validation and Resend for email. No database, no auth — zero-maintenance by design.

## Success Criteria

- Lighthouse 90+ on all categories (the hero literally claims it)
- WCAG AA accessibility per design-system-spec
- Contact form completable in under 30 seconds
- Both languages fully covered by one typed dictionary

## Key Documents

- `project-spec.md` (root) — full specification
- `minimum-viable-product-mvp-spec.md` — MVP feature detail
- `project-requirement-document-prd.md` — requirements
- `scope-and-goals.md` — boundaries
- `risks-and-open-questions.md` — open items
- `01 System Design/design-system-spec.md` — UI source of truth
