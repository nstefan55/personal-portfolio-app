# Current Feature

<!-- Feature Name -->

Phase 3 — Bilingual i18n (EN/HR client-side toggle)

## Status

<!-- Not Started|In Progress|Completed -->

In Progress

## Goals

<!-- Goals & requirements -->

**Build Phase 3 — i18n** (per `scope-and-goals.md`)

Make the whole page bilingual with a client-side EN/HR toggle, no reload, no route
change (route-based i18n is out of MVP scope).

- **Typed dictionary** (`src/lib/i18n.ts`) — `Lang` type + `dictionaries.en/hr`
  covering nav, hero, stats, about, skills (group titles), projects (tag + desc),
  experience (period/role/summary), contact. Sourced from each section's current EN
  content + the prototype's HR copy.
- **LanguageProvider** (`src/components/LanguageProvider.tsx`, client) — holds `lang`
  state, persists to `localStorage` (`portfolio_lang`), EN default; exposes
  `useLanguage()` → `{ lang, setLang, t }`.
- Wrap the app in the provider (in `layout.tsx`).
- Convert Nav, Hero, About, Skills, Projects, Experience, Contact to client components
  reading from `useLanguage().t`. Wire the Nav EN/HR toggle to `setLang`.
- Footer stays a server component (no translatable text — © year + proper nouns).

## Notes

<!-- Any extra notes -->

- Language-neutral data stays as-is: project names/images/stack/hrefs, skill items,
  company names, social links, the hero code card (it's code — same in both languages).
- **HR copy needing review:** translations for content added after the prototype —
  e.g. project tags "Dual Marketplace"/"University project"/"Master's Thesis" →
  "Dvostrani marketplace"/"Fakultetski projekt"/"Diplomski rad"; degree
  "Master Engineer in Information Technologies" → "Mag. ing. informacijskih tehnologija".
- First render is EN on both server + client (localStorage read happens in `useEffect`),
  so no hydration mismatch; a stored HR preference applies just after mount.

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
