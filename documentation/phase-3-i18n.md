# Phase 3 — Bilingual i18n (EN/HR)

Client-side EN/HR language toggle — no reload, no route change (route-based i18n is out
of MVP scope). EN default, persisted to `localStorage`.

## Architecture

| File | Role |
|---|---|
| `src/lib/i18n.ts` | Typed dictionary. `Lang` type, `dictionaries.en / .hr`, and the `Dictionary` shape. Covers nav, hero, stats, about, skills, projects, experience, contact (and, from Phase 4, `form`). |
| `src/components/LanguageProvider.tsx` | Client context. Holds `lang`, persists to `localStorage` (`portfolio_lang`), exposes `useLanguage() → { lang, setLang, t }`, and keeps `<html lang>` in sync. |
| `src/app/layout.tsx` | Wraps the app in `<LanguageProvider>`. |

## How to use

```tsx
"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function Section() {
  const { t } = useLanguage();
  return <h2>{t.about.title}</h2>;
}
```

The Nav EN/HR buttons call `setLang(code)`.

## Conventions

- **Add copy** by extending the `Dictionary` type in `i18n.ts`, then filling both `en`
  and `hr` — TypeScript enforces that neither language is missing a key.
- **Language-neutral data** (project images/stack/hrefs, skill items, company names,
  the hero code card) is shared, not duplicated per language.
- Sections that render translatable text are **client components**; Footer stays a
  server component (no translatable text).

## Hydration

First render is EN on both server and client (the `localStorage` read happens in
`useEffect` after mount), so there's no hydration mismatch. A stored HR preference
applies just after mount.

## Review note

HR translations for copy added after the prototype (some project tags, the degree
string) were authored here and are worth a native-speaker check.
