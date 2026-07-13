"use client";

import { useLanguage } from "@/components/LanguageProvider";

const RESUMES = [
  { lang: "en", href: "/resume_eng.pdf" },
  { lang: "hr", href: "/resume_hr.pdf" },
] as const;

export default function About() {
  const { t, lang } = useLanguage();
  return (
    <section id="about" className="mx-auto max-w-295 px-8 py-16">
      <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[0.9fr_1.4fr]">
        <div>
          <span className="font-mono text-[13px] font-medium text-brand-500">
            {t.about.kicker}
          </span>
          <h2 className="mt-2.5 font-heading text-[34px] leading-[1.1] font-bold tracking-[-1px] text-brand-900">
            {t.about.title}
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {RESUMES.map((resume) => (
              <a
                key={resume.lang}
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  resume.lang === lang
                    ? "rounded-[9px] bg-brand-700 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-600"
                    : "rounded-[9px] border border-neutral-200 bg-white px-5 py-3 text-[14px] font-semibold text-brand-900 transition-colors hover:border-brand-500"
                }
              >
                {resume.lang === "en" ? t.about.resumeEn : t.about.resumeHr}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4.5 text-[18px] leading-[1.7] text-neutral-600">
            {t.about.p1}
          </p>
          <p className="text-[18px] leading-[1.7] text-neutral-600">
            {t.about.p2}
          </p>
          <div className="mt-7.5 flex flex-wrap gap-8">
            <div>
              <div className="mb-1 text-[13px] font-medium text-neutral-400">
                {t.about.eduLabel}
              </div>
              <div className="text-[15px] font-medium text-neutral-800">
                {t.about.eduDegree}
              </div>
              <div className="text-[14px] text-neutral-600">
                {t.about.eduSchool}
              </div>
            </div>
            <div>
              <div className="mb-1 text-[13px] font-medium text-neutral-400">
                {t.about.langLabel}
              </div>
              <div className="text-[15px] font-medium text-neutral-800">
                {t.about.langValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
