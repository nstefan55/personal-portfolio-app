"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { LANGS } from "@/lib/i18n";

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stack, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-200 ${
        scrolled
          ? "border-neutral-200 bg-neutral-50/85 backdrop-blur-[10px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-17 max-w-295 items-center justify-between px-8">
        <a href="#top" className="flex items-center gap-2.75">
          <span className="text-[16px] font-semibold text-brand-900">
            Nikola Štefančić
          </span>
        </a>

        <div className="flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-lg px-3.5 py-2.25 text-[14.5px] font-medium text-neutral-600 transition-colors hover:bg-neutral-100 sm:block"
            >
              {link.label}
            </a>
          ))}

          <div className="ml-2.5 flex items-center rounded-lg bg-neutral-100 p-0.75">
            {LANGS.map((code) => {
              const active = lang === code;
              return (
                <button
                  key={code}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setLang(code)}
                  className={`rounded-md px-3 py-1.5 text-[13px] font-semibold uppercase transition-colors ${
                    active
                      ? "bg-white text-brand-700 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                      : "bg-transparent text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>

          <a
            href="#contact"
            className="ml-2.5 rounded-lg bg-brand-700 px-4.5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-600"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
