import Nav from "@/components/layout/Nav";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

// ProfilePage + Person structured data: entity signals for "web developer
// Zagreb"-type queries, with sameAs backlinks to GitHub/LinkedIn.
// inLanguage is "en" only — the HR toggle is client-side, so crawlers index
// the EN-rendered DOM (hreflang is out of MVP scope).
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}#profilepage`,
      url: SITE.url,
      name: "Nikola Štefančić — Full-Stack Web Developer",
      inLanguage: "en",
      mainEntity: { "@id": `${SITE.url}#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}#person`,
      name: SITE.name,
      alternateName: "Nikola Stefancic",
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      jobTitle: "Full-Stack Web Developer",
      description:
        "Full-stack web developer based in Zagreb, Croatia, building with React, Next.js, Node.js and PHP.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zagreb",
        addressCountry: "HR",
      },
      worksFor: { "@type": "Organization", name: "D8SOLUTIONS d.o.o." },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Applied Sciences Velika Gorica",
      },
      knowsLanguage: ["en", "de", "hr"],
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "PHP",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
        "WordPress",
      ],
      sameAs: [SITE.github, SITE.linkedin],
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Static compile-time JSON-LD; `<` escaped per Next.js docs — no untrusted input. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
