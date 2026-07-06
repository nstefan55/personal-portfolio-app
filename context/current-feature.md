# Current Feature

<!-- Feature Name -->

Phase 2 — Branch B: Section Body (about + skills + projects + experience + contact shell)

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

<!-- Goals & requirements -->

**Build Phase 2 — Static sections, Branch B: the body** (per `scope-and-goals.md`)

Fill the middle of the page between hero and footer, pixel-faithful to the approved
prototype (`Portfolio.dc.html`), EN only. All copy/data comes from the prototype.

- **About** (`src/components/sections/About.tsx`) — kicker "01 / About", title, two
  paragraphs, Education + Languages blocks.
- **Skills** (`src/components/sections/Skills.tsx`) — kicker "02 / Stack", 6 group
  cards with mono chips.
- **Projects** (`src/components/sections/Projects.tsx`) — kicker "03 / Work",
  Electious + Contracty rows (mark, tag, desc, stack, "View →").
- **Experience** (`src/components/sections/Experience.tsx`) — kicker "04 / Path",
  three roles (D8SOLUTIONS, Hrvatski Telekom, Combis).
- **Contact** (`src/components/sections/Contact.tsx`) — dark brand-900 card shell:
  title, sub, direct email + GitHub buttons. **Multi-step form is Phase 4** — this is
  the static shell only.
- Compose all five into `src/app/page.tsx` (Nav → Hero → …body… → Footer).

All spacing/sizing uses the v4 numeric scale per `coding-standards.md`.

## Notes

<!-- Any extra notes -->

- **EN only**; Phase 3 handles the bilingual dictionary + toggle.
- **Resume download gap:** MVP spec wants a resume-download button in About (and a
  resume link in Footer), but the approved prototype omits both, and the PDFs
  (`resume_eng.pdf` / `resume_hr.pdf`) don't exist yet. Building pixel-faithful to the
  prototype (no resume button); resume wiring is a follow-up once PDFs exist.
- Server components throughout (no interactivity in these sections).

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
