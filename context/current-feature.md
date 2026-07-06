# Current Feature

<!-- Feature Name -->

Phase 2 — Branch A: Section Frame (nav + hero + footer)

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

<!-- Goals & requirements -->

**Build Phase 2 — Static sections, Branch A: the frame** (per `scope-and-goals.md`)

Build the outer frame of the page, pixel-faithful to the approved prototype
(`01 System Design/portfolio-website-template/project/Portfolio.dc.html`), EN only.

- **Nav** (`src/components/layout/Nav.tsx`, client) — sticky; transparent →
  blurred `neutral-50` bg + border after 16px scroll. NŠ logo, section links,
  static EN/HR segmented control (visual only — Phase 3 wires it), "Get in touch" CTA.
- **Hero** (`src/components/hero/Hero.tsx`, server) — availability badge, 60px
  headline, sub, "View projects" + "Contact me" CTAs, GitHub/LinkedIn/Email icon
  links, dark brand-900 code card, two stat cards. `fadeUp` animation.
- **Footer** (`src/components/layout/Footer.tsx`, server) — copyright + GitHub /
  LinkedIn / Email links.
- Compose all three into `src/app/page.tsx`.

## Notes

<!-- Any extra notes -->

- **EN only** this phase; Phase 3 extracts the bilingual dictionary + wires the toggle.
  EN copy is inlined in components for now (per phased plan).
- **Typography:** following `design-system-spec.md` (Noto Sans body / Poppins headings /
  Roboto Mono accents). The prototype uses Poppins for *all* body copy — deliberate
  deviation toward the named UI source of truth. Flip `--font-body` to Poppins if
  literal prototype parity is wanted.
- **Container width:** prototype uses `max-width:1180px` (not the token's 1280px) —
  matching the prototype for visual parity via `max-w-[1180px]`.
- `fadeUp` keyframes need adding to `globals.css`.

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
