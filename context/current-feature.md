# Current Feature

<!-- Feature Name -->

Business email (business@nikolastefancic.me — Resend domain sending, branded
inquiry template, Gmail alias receive/reply)

## Status

<!-- Not Started|In Progress|Completed -->

In Progress

## Goals

<!-- Goals & requirements -->

Per `context/features/business-email-spec.md` (code) and
`context/features/business-email-setup-guide.md` (manual DNS/Resend/Gmail):

- Contact form sends from `business@nikolastefancic.me` (verified domain),
  with the lead's name as the from display name and reply-to set to the lead.
- Branded HTML email template (`src/lib/email-template.ts`), design-system
  colors, escaped user input, plain-text fallback kept.
- Manual: root-domain forwarding `business@` → personal Gmail; Gmail
  "Send mail as" via Resend SMTP (`smtp.resend.com`, separate API key) with a
  Business signature so replies come from the alias.

## Notes

<!-- Any extra notes -->

- Resend is send-only — receiving requires a forwarding provider on the root
  MX (Cloudflare Email Routing / registrar forwarding / ImprovMX). Open
  decision: which one, depends on where DNS is hosted.
- Form mail keeps `to: nikola.stefancic@gmail.com` directly (no forwarding
  hop); forwarding only serves direct human mail to the alias.

## History

<!-- Keep this updated. Earliest to latest -->

### 2026-07-06

- Phases 1–5 complete (scaffold, static sections, i18n, contact form UI, contact API).
  All merged to main. See `/documentation` for per-phase developer notes.
- Mobile navigation + responsive polish complete. Hamburger menu (< sm) with dropdown
  panel, Escape-to-close, solid nav when open, always-visible language toggle, new
  `nav.menu` key. Responsive scale-down on Hero, Contact card. See
  `/documentation/phase-6-mobile-nav.md`.

### 2026-07-13

- Resume buttons complete. Two buttons (EN/HR) in the About section left column,
  active language highlighted (primary style), PDFs open in a new tab from
  `public/`. New `about.resumeEn` / `about.resumeHr` dictionary keys. See
  `/documentation/resume-buttons.md`.
- SEO complete. `sitemap.ts`, `robots.ts`, full metadata (canonical, OG, Twitter,
  robots directives), JSON-LD ProfilePage + Person with Zagreb address and
  GitHub/LinkedIn `sameAs` backlinks, build-time OG image. See
  `/documentation/seo.md`.
