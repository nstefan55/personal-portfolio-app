const EXPERIENCE = [
  {
    period: "Oct 2025 — Present",
    role: "Web Developer",
    company: "D8SOLUTIONS d.o.o.",
    summary:
      "Building responsive client websites in React/Next.js with 90+ Lighthouse scores, plus WordPress/Elementor sites with full DNS/SSL/deployment configuration.",
  },
  {
    period: "May 2025 — Sep 2025",
    role: "Service Technician",
    company: "Hrvatski Telekom d.d.",
    summary:
      "Tested and updated firmware on refurbished terminal equipment — modems, set-top boxes and Wi-Fi mesh units.",
  },
  {
    period: "Nov 2023 — Jan 2024",
    role: "Junior System Administrator",
    company: "Combis d.o.o.",
    summary:
      "Monitored system performance, reviewed logs, managed Active Directory users and resolved hardware/software issues.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-295 px-8 py-16">
      <span className="font-mono text-[13px] font-medium text-brand-500">
        04 / Path
      </span>
      <h2 className="mt-2.5 mb-9 font-heading text-[34px] leading-[1.1] font-bold tracking-[-1px] text-brand-900">
        Experience
      </h2>
      <div className="flex flex-col">
        {EXPERIENCE.map((entry) => (
          <div
            key={entry.company}
            className="grid grid-cols-1 gap-7 border-t border-neutral-200 py-5.5 sm:grid-cols-[180px_1fr]"
          >
            <div className="pt-0.75 font-mono text-[13px] text-neutral-400">
              {entry.period}
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-brand-900">
                {entry.role}
              </h3>
              <div className="mt-0.5 mb-2 text-[14.5px] font-medium text-brand-700">
                {entry.company}
              </div>
              <p className="max-w-170 text-[14.5px] leading-[1.6] text-neutral-600">
                {entry.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
