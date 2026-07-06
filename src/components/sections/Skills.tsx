const SKILL_GROUPS = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "PHP"] },
  { title: "Frameworks", items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend & API", items: ["Node.js", "Express", "REST API"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "ORM & Caching", items: ["Prisma", "Mongoose", "Redis"] },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub Actions", "Vercel", "Claude Code", "Docker", "Postman", "Nginx"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-295 px-8 py-16">
      <span className="font-mono text-[13px] font-medium text-brand-500">
        02 / Stack
      </span>
      <h2 className="mt-2.5 mb-9 font-heading text-[34px] leading-[1.1] font-bold tracking-[-1px] text-brand-900">
        Tools I work with
      </h2>
      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 md:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-[14px] border border-neutral-200 bg-white px-6 py-5.5"
          >
            <h3 className="mb-3.5 text-[15px] font-semibold text-brand-900">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-[7px] bg-brand-50 px-2.5 py-1.25 font-mono text-[12.5px] text-brand-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
