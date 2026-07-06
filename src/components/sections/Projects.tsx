"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="mx-auto max-w-295 px-8 py-16">
      <span className="font-mono text-[13px] font-medium text-brand-500">
        {t.projects.kicker}
      </span>
      <h2 className="mt-2.5 mb-9 font-heading text-[34px] leading-[1.1] font-bold tracking-[-1px] text-brand-900">
        {t.projects.title}
      </h2>
      <div className="flex cursor-pointer flex-col gap-5.5">
        {t.projects.items.map((project) => (
          <Link
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="grid grid-cols-1 items-center gap-7 rounded-[16px] border border-neutral-200 bg-white px-8 py-7.5 transition-[border-color,box-shadow] hover:border-brand-500 hover:shadow-[0_14px_34px_-22px_rgba(30,58,95,0.45)] sm:grid-cols-[auto_1fr_auto]">
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
                {t.projects.view}
              </span>
              <span className="flex items-center gap-1.5 text-[14px] font-semibold whitespace-nowrap text-brand-700">
                {t.projects.view}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
