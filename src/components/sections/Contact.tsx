"use client";

import { SITE } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="mx-auto mt-12 max-w-295 px-8 pb-22.5">
      <div className="relative overflow-hidden rounded-[22px] bg-brand-900 px-14 py-16.5 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.35),transparent_55%)]" />
        <div className="relative">
          <h2 className="mb-4 font-heading text-[40px] font-bold tracking-[-1.5px]">
            {t.contact.title}
          </h2>
          <p className="mx-auto mb-8.5 max-w-130 text-[18px] leading-[1.6] text-[#b8c7dd]">
            {t.contact.sub}
          </p>

          <ContactForm />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[14px] text-[#b8c7dd]">
            <span>{t.form.orDirect}</span>
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-white underline underline-offset-4 hover:text-brand-100"
            >
              {SITE.email}
            </a>
            {/* <span aria-hidden className="text-white/30">
              ·
            </span>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline underline-offset-4 hover:text-brand-100"
            >
              GitHub
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
