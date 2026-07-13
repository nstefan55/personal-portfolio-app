# Phase 1 — Scaffold / Foundation

Replaces the `create-next-app` boilerplate with the real design-system foundation.
Everything downstream (sections, form) builds on the tokens and fonts set up here.

## What changed

| File | Change |
|---|---|
| `src/app/globals.css` | Full design-system `@theme`: brand / neutral / semantic colors, radius, shadow, layout max-widths. Light-theme `body` defaults (`neutral-50` bg, `neutral-950` text, body font). |
| `src/app/layout.tsx` | Poppins (headings), Noto Sans (body), Roboto Mono (mono) via `next/font/google`, exposed as `--font-poppins` / `--font-noto-sans` / `--font-roboto-mono`. Real page metadata. |
| `src/app/page.tsx` | Boilerplate replaced with a minimal token/font check placeholder. |
| `next.config.ts` | `turbopack.root` pinned to the project dir — silences the wrong-workspace-root warning caused by a stray `package-lock.json` in the home directory. |
| `public/*.svg` | Removed 5 unreferenced boilerplate SVGs. |

## How to use the tokens

Tailwind v4 auto-generates utilities from `@theme` — no JS config.

- Colors: `bg-brand-700`, `text-neutral-600`, `border-error-500`, etc.
- Fonts: `font-heading` (Poppins), `font-body` (Noto Sans), `font-mono` (Roboto Mono).
- Radius / shadow: `rounded-md`, `shadow-focus`, etc.

**Do not** create a `tailwind.config.ts` for tokens — all design tokens live in
`globals.css` under `@theme` (Tailwind v4 CSS-first config).

## Decisions

- **Light theme only.** Dark mode is out of MVP scope (the generic `coding-standards.md`
  "dark mode first" note does not apply — design + MVP specs are the source of truth).
- **Dropped** the Electius election-status colors from the design-spec `@theme` example
  (`--color-status-draft` etc.) — template leftover, not part of this portfolio.
- **Spacing** uses Tailwind's default 4px scale; no custom spacing tokens needed.

## Verification

- `npm run build` — compiles, TypeScript clean, static generation OK.
- Dev server serves `/` with the three font variables applied to `<html>` and the
  `font-heading` utility resolving.

## Next

Phase 2 — Static sections (nav, hero, about, skills, projects, experience, contact,
footer), pixel-faithful to the approved prototype, EN only.
