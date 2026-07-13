# Current Feature

<!-- Feature Name -->

Resume buttons (About section)

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

<!-- Goals & requirements -->

Per `context/features/resume-buttons-spec.md`:

- Two resume buttons (English / Croatian) in the left column of the "01 / About"
  section, under the title.
- The button matching the active site language is highlighted (primary style,
  `brand-700`); the other uses the secondary style (white, bordered).
- Each opens its PDF (`/resume_eng.pdf`, `/resume_hr.pdf`) in a new tab where the
  user can view/download it.
- Copy PDFs from `01 System Design/portfolio-website-template/project/uploads/`
  into `public/`.
- New dictionary keys: `about.resumeEn`, `about.resumeHr`.

## Notes

<!-- Any extra notes -->

- Buttons follow the design-system button patterns already used in Hero
  (primary = brand-700 fill / hover brand-600; secondary = white + border,
  hover border-brand-500).

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
