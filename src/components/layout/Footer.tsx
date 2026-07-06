import { SITE } from "@/lib/site";

const LINKS = [
  { label: "GitHub", href: SITE.github, external: true },
  { label: "LinkedIn", href: SITE.linkedin, external: true },
  { label: "Email", href: `mailto:${SITE.email}`, external: false },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-295 flex-wrap items-center justify-between gap-3.5 px-8 py-7">
        <span className="text-[14px] text-neutral-600">
          © {currentYear} {SITE.name}
        </span>
        <div className="flex gap-5.5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[14px] text-neutral-600 transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
