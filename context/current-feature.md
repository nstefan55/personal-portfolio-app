# Current Feature

<!-- Feature Name -->

Mobile navigation + responsive polish

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

<!-- Goals & requirements -->

- **Mobile menu:** add a hamburger toggle to `Nav` (visible < sm). Opens a dropdown
  panel with the section links + "Get in touch" CTA; closes on link select and on
  Escape. Nav bar goes solid when the menu is open. Language toggle stays visible at
  all widths. New `nav.menu` dictionary key (EN "Menu" / HR "Izbornik") for the
  button's `aria-label`.
- **Responsive pass:** make the Contact card padding + heading scale down on small
  screens; sanity-check all sections at 390px (grids already stack).

## Notes

<!-- Any extra notes -->

- Desktop layout unchanged; the mobile panel and hamburger are `sm:hidden` / the
  desktop links + CTA are hidden below `sm`.
- Hamburger is 44×44 (WCAG touch target); `aria-expanded` + `aria-controls` wired.

## History

<!-- Keep this updated. Earliest to latest -->

### 2026-07-06

- Phases 1–5 complete (scaffold, static sections, i18n, contact form UI, contact API).
  All merged to main. See `/documentation` for per-phase developer notes.
- Mobile navigation + responsive polish complete. Hamburger menu (< sm) with dropdown
  panel, Escape-to-close, solid nav when open, always-visible language toggle, new
  `nav.menu` key. Responsive scale-down on Hero, Contact card. See
  `/documentation/phase-6-mobile-nav.md`.
