# Phase 6 — Mobile Navigation + Responsive Polish

Adds a mobile menu to the sticky nav and scales down the widest sections at small
widths. Desktop layout is unchanged — everything new is `sm:hidden` / gated behind `sm:`.

## Files

| File | Change |
|---|---|
| `src/components/layout/Nav.tsx` | Hamburger toggle + dropdown panel; `menuOpen` state. |
| `src/lib/i18n.ts` | New `nav.menu` key (EN "Menu" / HR "Izbornik"). |
| `src/components/hero/Hero.tsx` | Smaller padding below `sm`. |
| `src/components/sections/Contact.tsx` | Card padding + heading scale down below `sm`. |

## Mobile menu behaviour

- **Hamburger** (`FiMenu`/`FiX`, `react-icons`) shows only below `sm`, 44×44 touch target.
- **Panel** is an absolutely-positioned dropdown under the bar: section links + "Get in
  touch" CTA, stacked. Closes on link select and on **Escape** (keydown listener mounted
  only while open).
- **Solid bar when open:** `solid = scrolled || menuOpen` drives the blurred `neutral-50`
  background, so the transparent-at-top nav goes solid whenever the panel is showing.
- **Language toggle stays visible at all widths** — it lives outside the `sm:hidden` group.
- **A11y:** button wires `aria-label={t.nav.menu}`, `aria-expanded`, `aria-controls`
  pointing at the panel's `id="mobile-menu"`.

## Responsive pass

- Hero and Contact use a `base → sm:` padding pair; Contact's `h2` drops 40px → 28px below
  `sm`. Section grids already stacked to one column, so no other layout work was needed.

## Notes

- Per coding-standards, spacing uses the numeric scale; only non-spacing one-offs
  (`text-[28px]`, `rounded-[22px]`) stay as arbitrary values.
