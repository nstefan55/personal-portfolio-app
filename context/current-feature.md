# Current Feature

<!-- Feature Name -->

SEO (sitemap, robots, metadata, structured data)

## Status

<!-- Not Started|In Progress|Completed -->

In Progress

## Goals

<!-- Goals & requirements -->

Per `context/features/seo-spec.md`:

- `src/app/sitemap.ts` — sitemap for the live domain (nikolastefancic.me).
- `src/app/robots.ts` — generates `/robots.txt`; allow all, block `/api/`,
  point at the sitemap.
- Full page metadata in `layout.tsx`: `metadataBase`, canonical, keywords,
  Open Graph + Twitter card (social sharing), robots directives.
- Local SEO: JSON-LD `Person` structured data (Zagreb, Croatia; job title,
  education, skills) with `sameAs` backlinks to GitHub and LinkedIn.
- Keep Lighthouse 90+ (changes are head-only metadata; no runtime JS added).

## Notes

<!-- Any extra notes -->

- hreflang / route-based i18n is explicitly out of MVP scope
  (`context/scope-and-goals.md`) — language toggle is client-side, so SEO
  targets the EN default content on the single canonical URL.
- One page only, so the sitemap has a single entry; section anchors don't
  belong in sitemaps.

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
