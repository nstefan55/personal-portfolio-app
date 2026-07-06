import Image from "next/image";
import Link from "next/link";
const PROJECTS = [
  {
    image: "/images/logo/electious-logo.png",
    name: "Electious",
    tag: ["Master's Thesis"],
    desc: "Full-stack CRUD information system for electronic voting in organizations, with cryptographic vote verification via SHA-256 and Merkle trees.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "SHA-256",
    ],
    href: "#",
  },
  {
    image: "/images/logo/contracty-logo.png",
    name: "Contracty",
    tag: ["Dual Marketplace", "University project"],
    desc: "A two-sided marketplace connecting property owners with verified local contractors — map-based search, portfolios, reviews and direct project inquiries.",
    stack: ["Next.js", "MongoDB", "NextAuth", "Cloudinary", "MapTiler"],
    href: "https://contracty.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-295 px-8 py-16">
      <span className="font-mono text-[13px] font-medium text-brand-500">
        03 / Work
      </span>
      <h2 className="mt-2.5 mb-9 font-heading text-[34px] leading-[1.1] font-bold tracking-[-1px] text-brand-900">
        Featured Personal Projects
      </h2>
      <div className="flex flex-col gap-5.5 cursor-pointer">
        {PROJECTS.map((project) => (
          <Link
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              key={project.name}
              className="grid grid-cols-1 items-center gap-7 rounded-[16px] border border-neutral-200 bg-white px-8 py-7.5 transition-[border-color,box-shadow] hover:border-brand-500 hover:shadow-[0_14px_34px_-22px_rgba(30,58,95,0.45)] sm:grid-cols-[auto_1fr_auto]"
            >
              <div className="flex h-30 w-30 items-center justify-center rounded-[13px] bg-brand-900 font-heading text-[24px] font-bold tracking-[-1px] text-white">
                <Image
                  width={500}
                  height={300}
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div>
                <div className="mb-1.75 flex items-center gap-2.75">
                  <h3 className="text-[21px] font-semibold text-brand-900">
                    {project.name}
                  </h3>
                  {project.tag.map((eachTag) => (
                    <span
                      key={eachTag}
                      className="rounded-full bg-brand-50 px-2.25 py-0.75 text-[11.5px] font-medium text-brand-700"
                    >
                      {eachTag}
                    </span>
                  ))}
                </div>
                <p className="mb-3 max-w-160 text-[15px] leading-[1.6] text-neutral-600">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11.5px] text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-[14px] font-semibold whitespace-nowrap text-brand-700">
                View →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
