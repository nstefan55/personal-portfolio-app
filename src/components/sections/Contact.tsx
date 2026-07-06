import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto mt-12 max-w-295 px-8 pb-22.5">
      <div className="relative overflow-hidden rounded-[22px] bg-brand-900 px-14 py-16.5 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.35),transparent_55%)]" />
        <div className="relative">
          <h2 className="mb-4 font-heading text-[40px] font-bold tracking-[-1.5px]">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mb-8.5 max-w-130 text-[18px] leading-[1.6] text-[#b8c7dd]">
            Have a project, a role, or just want to say hi? My inbox is always
            open.
          </p>
          {/* Phase 4 replaces these direct links with the multi-step contact form. */}
          <div className="flex flex-wrap justify-center gap-3.5">
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-[10px] bg-white px-7 py-3.75 text-[15px] font-semibold text-brand-900"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] border border-white/20 bg-white/12 px-7 py-3.75 text-[15px] font-semibold text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
