# SEO (sitemap, robots, metadata, structured data)

Spec: `context/features/seo-spec.md`

## What changed

- **`src/lib/site.ts`** — added `url: "https://nikolastefancic.me"` as the single
  source of truth for the canonical origin.
- **`src/app/sitemap.ts`** — Next metadata route generating `/sitemap.xml` with the
  one canonical URL (single-page site; section anchors don't belong in sitemaps).
- **`src/app/robots.ts`** — generates `/robots.txt`: allow all, `Disallow: /api/`,
  absolute sitemap URL (the `sitemap` field is not resolved against `metadataBase`).
- **`src/app/layout.tsx`** — full `Metadata` object: `metadataBase`, canonical,
  keywords (incl. local "web developer Zagreb / Croatia"), authors/creator,
  Open Graph (`type: website`, `en_US`), Twitter `summary_large_image`, and robots
  directives (`index/follow`, `max-image-preview: large`, `max-snippet: -1`).
- **`src/app/page.tsx`** — JSON-LD (`ProfilePage` + `Person` via `@graph`):
  Zagreb `PostalAddress` (local SEO), `jobTitle`, `worksFor` (D8SOLUTIONS),
  `alumniOf`, `knowsAbout` (stack), `knowsLanguage`, and `sameAs` backlinks to
  GitHub + LinkedIn. Embedded as an inline `application/ld+json` script per the
  official Next.js JSON-LD guide, with `<` escaped to `<`; the payload is a
  static compile-time constant (no untrusted input).
- **`src/app/opengraph-image.tsx`** — static 1200×630 social card generated at
  build time via `next/og` (`ImageResponse`); Next auto-injects `og:image` /
  `twitter:image` tags with dimensions and alt. Brand-900 navy background matching
  the design system.

## Design decisions

- **No `LocalBusiness` schema** — Nikola is an individual employee, not a business
  entity; `Person.address` carries the local relevance without risking an invalid
  Maps/Local-Pack listing.
- **No hreflang / `WebSite` schema** — route-based i18n is explicitly out of MVP
  scope; the HR toggle is client-side so crawlers index the EN DOM (`inLanguage:
  "en"`). `WebSite` adds nothing without site search.
- **No `Person.image`** — omitted rather than pointing at a placeholder; add a real
  headshot URL (≥250×250) when one exists.
- All new routes are statically generated — zero runtime JS added, so Lighthouse
  scores are unaffected.

## Verification

- `npm run build` passes; `/`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`
  all static.
- Verified on a local production server: robots/sitemap content, all OG/Twitter/
  canonical/robots meta tags in the head, JSON-LD parses as valid JSON with
  ProfilePage + Person types, OG image renders correctly (incl. diacritics).

## Post-deploy (manual)

- Submit `https://nikolastefancic.me/sitemap.xml` in Google Search Console.
- Test the live URL in Google's Rich Results Test and validator.schema.org.
- Add the portfolio URL to the GitHub and LinkedIn profiles (real backlinks).
