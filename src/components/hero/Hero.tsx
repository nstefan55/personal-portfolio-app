import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { SITE } from "@/lib/site";

const SOCIALS = [
  { label: "GitHub", href: SITE.github, Icon: FaGithub },
  { label: "LinkedIn", href: SITE.linkedin, Icon: FaLinkedin },
  { label: "Email", href: `mailto:${SITE.email}`, Icon: FiMail },
];

const STATS = [
  { value: "90+", label: "Lighthouse scores" },
  { value: "2+", label: "Years building" },
];

export default function Hero() {
  return (
    <header id="top" className="mx-auto max-w-295 px-8 pt-32.5 pb-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.35fr_0.85fr] md:gap-16">
        {/* Left column */}
        <div className="animate-fade-up">
          <span className="mb-6.5 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.25 py-1.5 text-[13px] font-medium text-brand-700">
            <span className="h-1.75 w-1.75 rounded-full bg-success-500" />
            Open to opportunities
          </span>
          <h1 className="mb-5.5 font-heading text-[40px] leading-[1.04] font-bold tracking-[-2px] text-balance text-brand-900 sm:text-[52px] md:text-[60px]">
            Full-stack web developer building modern, reliable systems.
          </h1>
          <p className="mb-9 max-w-140 text-[19px] leading-[1.6] text-neutral-600">
            I design and ship web applications with React, Next.js and
            TypeScript — from client-facing commercial sites to full-stack
            information systems. Currently completing a Master&apos;s in
            Information Technology in Zagreb.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="rounded-[9px] bg-brand-700 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-[9px] border border-neutral-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-brand-900 transition-colors hover:border-brand-500"
            >
              Contact me
            </a>
            <div className="ml-1.5 flex gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-[9px] border border-neutral-200 bg-white text-brand-900 transition-all hover:border-brand-500 hover:text-brand-700"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — code card + stats */}
        <div className="animate-fade-up [animation-delay:0.1s]">
          <div className="rounded-[18px] bg-brand-900 p-7.5 text-white shadow-[0_20px_50px_-20px_rgba(30,58,95,0.5)]">
            <div className="mb-5.5 flex gap-1.75">
              <span className="h-2.75 w-2.75 rounded-full bg-white/25" />
              <span className="h-2.75 w-2.75 rounded-full bg-white/25" />
              <span className="h-2.75 w-2.75 rounded-full bg-white/25" />
            </div>
            <pre className="m-0 font-mono text-[13.5px] leading-[1.85] whitespace-pre-wrap text-[#cdd9ea]">
              <span className="text-[#7aa5e0]">const</span>{" "}
              <span className="text-white">dev</span> {"= {"}
              {"\n  name: "}
              <span className="text-[#8fd6a8]">
                &apos;Nikola Štefančić&apos;
              </span>
              ,{"\n  role: "}
              <span className="text-[#8fd6a8]">
                &apos;Full-stack Engineer&apos;
              </span>
              ,{"\n  location: "}
              <span className="text-[#8fd6a8]">
                &apos;Zagreb, Croatia&apos;
              </span>
              ,{"\n  stack: ["}
              <span className="text-[#8fd6a8]">&apos;Next.js&apos;</span>,{" "}
              <span className="text-[#8fd6a8]">&apos;React&apos;</span>,{" "}
              <span className="text-[#8fd6a8]">&apos;TS&apos;</span>
              {"],\n  education: "}
              <span className="text-[#8fd6a8]">
                &apos;mag. ing. techn. inf.&apos;
              </span>
              ,{"\n  openToWork: "}
              <span className="text-[#f0a868]">true</span>,{"\n}"}
            </pre>
          </div>
          <div className="mt-4.5 flex gap-3.5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 rounded-xl border border-neutral-200 bg-white px-4.5 py-4"
              >
                <div className="text-[26px] font-bold tracking-[-1px] text-brand-700">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[13px] text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
