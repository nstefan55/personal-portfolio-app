# Resume Buttons (About section)

Spec: `context/features/resume-buttons-spec.md`

## What changed

- **`src/components/sections/About.tsx`** — added two resume buttons in the left
  column of the "01 / About" section, under the title. A small `RESUMES` const maps
  each language to its PDF. The button whose language matches the active site
  language renders with the primary button style (`bg-brand-700`, white text, hover
  `brand-600`); the other renders with the secondary style (white, `neutral-200`
  border, hover `brand-500` border) — identical classes to the Hero CTAs. Both open
  in a new tab (`target="_blank" rel="noopener noreferrer"`) so the user can view
  and download the PDF from the browser viewer.
- **`src/lib/i18n.ts`** — new `Dictionary` keys `about.resumeEn` / `about.resumeHr`:
  - EN: "Resume — English" / "Resume — Croatian"
  - HR: "Životopis — engleski" / "Životopis — hrvatski"
- **`public/resume_eng.pdf`, `public/resume_hr.pdf`** — copied from
  `01 System Design/portfolio-website-template/project/uploads/`.

## Design decisions

- No `download` attribute: the spec asks for open-in-new-tab with download
  available; forcing a download would skip the in-browser preview.
- No shared Button component yet — only four button instances exist in the app;
  extract one when the count grows.

## Verification

- `npm run build` passes (TypeScript clean).
- Production build serves both PDFs (`200 application/pdf`); SSR output shows the
  EN button highlighted with EN as default language, HR highlight switches via the
  client-side language context.
