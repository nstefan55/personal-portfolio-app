# Phase 2 — Static Sections (all 8, EN)

Built the full one-page layout, pixel-faithful to the approved prototype
(`01 System Design/portfolio-website-template/project/Portfolio.dc.html`). Delivered in
two branches: **A (frame)** = nav + hero + footer; **B (body)** = about, skills,
projects, experience, contact shell.

## Components

| File | Notes |
|---|---|
| `src/components/layout/Nav.tsx` | Client. Sticky; transparent → blurred `neutral-50` bg + border after 16px scroll. Section links, EN/HR toggle (wired in Phase 3), CTA. |
| `src/components/hero/Hero.tsx` | Badge, headline, sub, CTAs, GitHub/LinkedIn/Email icon buttons (`react-icons`), dark code card, two stat cards, `fadeUp`. |
| `src/components/sections/About.tsx` | Kicker, title, two paragraphs, Education + Languages. |
| `src/components/sections/Skills.tsx` | Six group cards, mono chips. |
| `src/components/sections/Projects.tsx` | Electius + Contracty; whole card is a `next/link`; logo images (`public/images/logo/`); per-project tag pills. |
| `src/components/sections/Experience.tsx` | Three roles, two-column rows. |
| `src/components/sections/Contact.tsx` | Dark brand-900 card; shell only (form added in Phase 4). |
| `src/components/layout/Footer.tsx` | Copyright + social links. Stays a server component. |
| `src/app/page.tsx` | Composes Nav → Hero → About → Skills → Projects → Experience → Contact → Footer. |
| `src/lib/site.ts` | Shared name / email / GitHub / LinkedIn URLs. |

## Conventions established here

- **Spacing/sizing** uses the Tailwind v4 numeric scale (`max-w-295`, `py-16`,
  `gap-3.5`, …), never arbitrary `[Npx]`. See `coding-standards.md`.
- **Container:** `mx-auto max-w-295 px-8` (prototype's 1180px width).
- Icons come from `react-icons` (installed this phase).

## Gotchas

- A `next/link` renders an `<a>`; a nested `<a>` inside it is invalid HTML. The
  Projects "View →" is a `<span>`, not an anchor.
- Logo `<Image>` may need `object-contain` + a constrained container to fit its box.

## Known gap

- The MVP spec wants a resume-download button (About + Footer); the prototype omits it
  and the PDFs don't exist yet. Deferred until `resume_eng.pdf` / `resume_hr.pdf` exist.
