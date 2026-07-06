export default function About() {
  return (
    <section id="about" className="mx-auto max-w-295 px-8 py-16">
      <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[0.9fr_1.4fr]">
        <div>
          <span className="font-mono text-[13px] font-medium text-brand-500">
            01 / About
          </span>
          <h2 className="mt-2.5 font-heading text-[34px] leading-[1.1] font-bold tracking-[-1px] text-brand-900">
            A bit about me
          </h2>
        </div>
        <div>
          <p className="mb-4.5 text-[18px] leading-[1.7] text-neutral-600">
            I&apos;m a final-year student at the University of Applied Sciences
            Velika Gorica, focused on software engineering, databases and
            full-stack system architecture. I build and maintain web
            applications using modern technologies — and WordPress/Elementor
            solutions in a commercial, client-facing environment.
          </p>
          <p className="text-[18px] leading-[1.7] text-neutral-600">
            I actively develop my knowledge of CI/CD practices and full-stack
            architecture, with a particular interest in applying LLMs to
            everyday work.
          </p>
          <div className="mt-7.5 flex flex-wrap gap-8">
            <div>
              <div className="mb-1 text-[13px] font-medium text-neutral-400">
                Education
              </div>
              <div className="text-[15px] font-medium text-neutral-800">
                Master Engineer in Information Technologies
              </div>
              <div className="text-[14px] text-neutral-600">
                Velika Gorica · Information Systems
              </div>
            </div>
            <div>
              <div className="mb-1 text-[13px] font-medium text-neutral-400">
                Languages
              </div>
              <div className="text-[15px] font-medium text-neutral-800">
                English · German · Croatian
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
