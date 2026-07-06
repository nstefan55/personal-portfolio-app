# Future Updates — Roadmap

Planned enhancements beyond the MVP (bilingual one-page portfolio + contact form).
Items are roughly ordered; nothing here is committed to a date.

---

## 1. Blog / Writing Section

A place for Nikola to publish technical write-ups, project retrospectives, and notes —
turning the portfolio from a static landing page into a content hub that drives organic
traffic and demonstrates expertise.

### Why

- **SEO & discovery:** long-form content ranks and pulls in visitors who never see the
  GitHub/LinkedIn links.
- **Proof of depth:** case studies (e.g. the Electious crypto-verification design) show
  how he thinks, not just what he shipped.
- **Compounding:** every post is a permanent asset that keeps working.

### Scope (MVP of the blog)

- **Index** at `/blog` — reverse-chronological list of posts (title, date, reading time,
  tags, excerpt).
- **Post page** at `/blog/[slug]` — rendered article with headings, code blocks
  (syntax-highlighted), images, and a back-to-list link.
- **Tags/categories** — filter the index by tag (`/blog/tag/[tag]`).
- **Bilingual** — posts authored per language where it makes sense; fall back to the
  default language when a translation is missing. Reuse the existing `LanguageProvider`.
- **SEO** — per-post `<title>`/description, Open Graph image, canonical URL, and JSON-LD
  `Article` schema. Add an RSS feed (`/blog/rss.xml`) and update `sitemap.xml`.

### Content approach

- **MDX files** in `content/blog/*.mdx` (frontmatter: title, date, tags, lang, excerpt,
  cover). No CMS, no database — keeps the "zero-maintenance" property. Author in the repo,
  deploy via git.
- Alternative if non-technical editing is ever needed: a headless CMS (e.g. Sanity /
  Contentlayer) — deferred until there's a real need.

### Technical notes

- Next.js App Router: `app/blog/page.tsx` (index, static), `app/blog/[slug]/page.tsx`
  with `generateStaticParams` (SSG per post). Reading time via a small util.
- Syntax highlighting with Shiki (build-time, zero client JS) to protect Lighthouse.
- Add a "Writing" link to the nav (desktop + the new mobile menu) once at least one post
  exists.

### Fits the existing architecture

- Design tokens, fonts, and the `@theme` system already cover typography and color.
- The bilingual dictionary pattern extends naturally to post metadata/UI chrome.
- Static generation keeps the 90+ Lighthouse target intact.

---

## 2. Other Roadmap Items (backlog)

- **Services / pricing section** — list offerings (custom web apps, WordPress/Elementor)
  with "inquire" CTAs feeding the existing contact form. (First non-blog roadmap item per
  `scope-and-goals.md`.)
- **Project case-study pages** — dedicated deep-dives for Electious / Contracty, linked
  from the Projects section (currently "View →").
- **Resume download** — wire the resume button (About + Footer) once `resume_eng.pdf` /
  `resume_hr.pdf` exist (flagged during Phase 2).
- **Analytics** — privacy-friendly (e.g. Vercel Analytics / Plausible) to measure traffic
  and form conversion.
- **Custom domain** — decision pending (see `risks-and-open-questions.md`).
- **Rate-limit hardening** — swap the in-memory contact rate limiter for Upstash/Redis if
  abuse appears (noted in Phase 5 docs).
