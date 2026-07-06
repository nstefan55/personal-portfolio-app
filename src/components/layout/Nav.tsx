"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "@/components/LanguageProvider";
import { LANGS } from "@/lib/i18n";

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stack, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
  ];

  const solid = scrolled || menuOpen;

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-200 ${
        solid
          ? "border-neutral-200 bg-neutral-50/85 backdrop-blur-[10px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-17 max-w-295 items-center justify-between px-6 sm:px-8">
        <a href="#top" className="flex items-center gap-2.75">
          <span className="text-[16px] font-semibold text-brand-900">
            Nikola Štefančić
          </span>
        </a>

        <div className="flex items-center gap-1.5">
          {/* Desktop section links */}
          <div className="hidden items-center gap-1.5 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2.25 text-[14.5px] font-medium text-neutral-600 transition-colors hover:bg-neutral-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language toggle — always visible */}
          <div className="ml-1 flex items-center rounded-lg bg-neutral-100 p-0.75 sm:ml-2.5">
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="ml-2.5 hidden rounded-lg bg-brand-700 px-4.5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-600 sm:inline-block"
          >
            {t.nav.cta}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t.nav.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-lg text-brand-900 transition-colors hover:bg-neutral-100 sm:hidden"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-neutral-200 bg-neutral-50 px-6 py-4 sm:hidden"
        >
          <div className="mx-auto flex max-w-295 flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-brand-700 px-4 py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
