export type Lang = "en" | "hr";

export const LANGS: Lang[] = ["en", "hr"];
export const DEFAULT_LANG: Lang = "en";
export const LANG_STORAGE_KEY = "portfolio_lang";

export type SkillGroup = { title: string; items: string[] };

export type Project = {
  name: string;
  image: string;
  tag: string[];
  desc: string;
  stack: string[];
  href: string;
  link: string;
  githubLink: string;
};

export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export type Dictionary = {
  nav: {
    about: string;
    stack: string;
    projects: string;
    experience: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    sub: string;
    cta1: string;
    cta2: string;
    stats: { value: string; label: string }[];
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    eduLabel: string;
    eduDegree: string;
    eduSchool: string;
    langLabel: string;
    langValue: string;
  };
  skills: {
    kicker: string;
    title: string;
    groups: SkillGroup[];
  };
  projects: {
    kicker: string;
    title: string;
    view: string;
    github: string;
    items: Project[];
  };
  experience: {
    kicker: string;
    title: string;
    items: ExperienceEntry[];
  };
  contact: {
    title: string;
    sub: string;
  };
  form: {
    intentQuestion: string;
    intentLabels: { project: string; job: string; hello: string };
    messageQuestion: string;
    messagePlaceholders: { project: string; job: string; hello: string };
    nameQuestion: string;
    namePlaceholder: string;
    emailQuestion: string;
    emailPlaceholder: string;
    stepOf: string; // template: "Step {n} of {total}"
    back: string;
    next: string;
    send: string;
    sending: string;
    successTitle: string;
    successSub: string;
    sendAnother: string;
    errorMessage: string;
    retry: string;
    orDirect: string;
    errors: {
      message: string;
      name: string;
      email: string;
    };
  };
};

export type Intent = "project" | "job" | "hello";

// Language-neutral project meta reused across both dictionaries.
const ELECTIOUS = {
  name: "Electious",
  image: "/images/logo/electious-logo.png",
  stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "SHA-256"],
  githubLink: "#",
  href: "#",
};
const CONTRACTY = {
  name: "Contracty",
  image: "/images/logo/contracty-logo.png",
  stack: ["Next.js", "MongoDB", "NextAuth", "Cloudinary", "MapTiler"],
  githubLink: "https://github.com/nstefan55/contracty-marketplace-app",
  href: "https://contracty.vercel.app/",
};

// Shared skill items (language-neutral); only group titles are translated.
const SKILL_ITEMS = {
  languages: ["JavaScript", "TypeScript", "PHP"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express", "REST API"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  orm: ["Prisma", "Mongoose", "Redis"],
  devops: ["Git", "GitHub Actions", "Vercel", "Claude Code", "Docker", "Postman", "Nginx"],
  CMS: ["WordPress", "Elementor"],
};

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      cta: "Get in touch",
    },
    hero: {
      badge: "Open to opportunities",
      title: "Full-stack web developer building modern, reliable systems.",
      sub: "I design and ship web applications with React, Next.js and TypeScript — from client-facing commercial sites to full-stack information systems. Currently completing a Master's in Information Technology in Velika Gorica.",
      cta1: "View projects",
      cta2: "Contact me",
      stats: [
        { value: "90+", label: "Lighthouse scores" },
        { value: "2+", label: "Years building" },
      ],
    },
    about: {
      kicker: "01 / About",
      title: "A bit about me",
      p1: "I'm a final-year student at the University of Applied Sciences Velika Gorica, focused on software engineering, databases and full-stack system architecture. I build and maintain web applications using modern technologies — and WordPress/Elementor solutions in a commercial, client-facing environment.",
      p2: "I actively develop my knowledge of CI/CD practices and full-stack architecture, with a particular interest in applying LLMs to everyday work.",
      eduLabel: "Education",
      eduDegree: "Master Engineer in Information Technologies",
      eduSchool: "Velika Gorica · Information Systems",
      langLabel: "Languages",
      langValue: "English · German · Croatian",
    },
    skills: {
      kicker: "02 / Stack",
      title: "Tools I work with",
      groups: [
        { title: "Languages", items: SKILL_ITEMS.languages },
        { title: "Frameworks", items: SKILL_ITEMS.frameworks },
        { title: "Backend & API", items: SKILL_ITEMS.backend },
        { title: "Databases", items: SKILL_ITEMS.databases },
        { title: "ORM & Caching", items: SKILL_ITEMS.orm },
        { title: "DevOps & Tools", items: SKILL_ITEMS.devops },
        { title: "CMS & Build Tools", items: SKILL_ITEMS.CMS },
      ],
    },
    projects: {
      kicker: "03 / Work",
      title: "Featured Personal Projects",
      view: "View →",
      github: "Github →",
      items: [
        {
          ...ELECTIOUS,
          tag: ["Master's Thesis"],
          desc: "Full-stack CRUD information system for electronic voting in organizations, with cryptographic vote verification via SHA-256 and Merkle trees.",
          link: "#",
        },
        {
          ...CONTRACTY,
          tag: ["Dual Marketplace", "University project"],
          desc: "A two-sided marketplace connecting property owners with verified local contractors — search, portfolios, reviews and direct project inquiries.",
          link: "https://contracty.vercel.app/",
        },
      ],
    },
    experience: {
      kicker: "04 / Path",
      title: "Experience",
      items: [
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
      ],
    },
    contact: {
      title: "Let's build something.",
      sub: "Have a project, a role, or just want to say hi? My inbox is always open.",
    },
    form: {
      intentQuestion: "What brings you here?",
      intentLabels: {
        project: "Project",
        job: "Job opportunity",
        hello: "Just saying hi",
      },
      messageQuestion: "Tell me briefly about it",
      messagePlaceholders: {
        project: "A sentence or two about the project…",
        job: "The role, the team, anything relevant…",
        hello: "Go ahead :)",
      },
      nameQuestion: "Your name",
      namePlaceholder: "Jane Doe",
      emailQuestion: "Your email",
      emailPlaceholder: "you@example.com",
      stepOf: "Step {n} of {total}",
      back: "Back",
      next: "Next",
      send: "Send",
      sending: "Sending…",
      successTitle: "Thanks — I'll reply within 48h.",
      successSub: "Your message is on its way.",
      sendAnother: "Send another",
      errorMessage: "Something went wrong. Please try again.",
      retry: "Try again",
      orDirect: "Prefer email? Reach me directly:",
      errors: {
        message: "Please write between 10 and 2000 characters.",
        name: "Please enter your name (2–100 characters).",
        email: "Please enter a valid email address.",
      },
    },
  },

  hr: {
    nav: {
      about: "O meni",
      stack: "Tehnologije",
      projects: "Projekti",
      experience: "Iskustvo",
      cta: "Kontaktiraj me",
    },
    hero: {
      badge: "Otvoren za prilike",
      title: "Full-stack web developer koji gradi moderne i pouzdane sustave.",
      sub: "Projektiram i razvijam web aplikacije u Reactu, Next.js-u i TypeScriptu — od komercijalnih klijentskih stranica do full-stack informacijskih sustava. Trenutačno završavam diplomski studij informacijskih tehnologija u Velikoj Gorici.",
      cta1: "Pogledaj projekte",
      cta2: "Kontaktiraj me",
      stats: [
        { value: "90+", label: "Lighthouse ocjene" },
        { value: "2+", label: "Godine iskustva" },
      ],
    },
    about: {
      kicker: "01 / O meni",
      title: "Nešto o meni",
      p1: "Student sam završne godine Veleučilišta Velika Gorica, usmjeren na softversko inženjerstvo, baze podataka i full-stack arhitekturu sustava. Razvijam i održavam web aplikacije koristeći moderne tehnologije te WordPress/Elementor rješenja u komercijalnom okruženju s klijentima.",
      p2: "Aktivno usavršavam znanja iz CI/CD praksi i full-stack arhitekture, uz dodatan interes za primjenu LLM-ova u svakodnevnom radu.",
      eduLabel: "Obrazovanje",
      eduDegree: "Mag. ing. informacijskih tehnologija",
      eduSchool: "Velika Gorica · Informacijski sustavi",
      langLabel: "Jezici",
      langValue: "Engleski · Njemački · Hrvatski",
    },
    skills: {
      kicker: "02 / Tehnologije",
      title: "Tehnologije s kojima radim",
      groups: [
        { title: "Jezici", items: SKILL_ITEMS.languages },
        { title: "Okviri", items: SKILL_ITEMS.frameworks },
        { title: "Backend i API", items: SKILL_ITEMS.backend },
        { title: "Baze podataka", items: SKILL_ITEMS.databases },
        { title: "ORM i caching", items: SKILL_ITEMS.orm },
        { title: "DevOps i alati", items: SKILL_ITEMS.devops },
        { title: "CMS sustavi i builderi", items: SKILL_ITEMS.CMS },
      ],
    },
    projects: {
      kicker: "03 / Rad",
      title: "Istaknuti osobni projekti",
      view: "Pogledaj →",
      github: "GitHub →",
      items: [
        {
          ...ELECTIOUS,
          tag: ["Diplomski rad"],
          desc: "Full-stack CRUD informacijski sustav za elektroničko glasovanje u organizacijama, s kriptografskom verifikacijom glasova putem SHA-256 i Merkle stabala.",
          link: "#",
        },
        {
          ...CONTRACTY,
          tag: ["Dvostrani marketplace", "Fakultetski projekt"],
          desc: "Dvostrani marketplace koji povezuje vlasnike nekretnina s verificiranim lokalnim izvođačima — pretraga, portfoliji, recenzije i izravni upiti za projekte.",
          link: "https://contracty.vercel.app/",
        },
      ],
    },
    experience: {
      kicker: "04 / Put",
      title: "Radno iskustvo",
      items: [
        {
          period: "Lis. 2025. — Danas",
          role: "Web Developer",
          company: "D8SOLUTIONS d.o.o.",
          summary:
            "Izrada responzivnih klijentskih web stranica u React/Next.js-u s Lighthouse ocjenama iznad 90, te WordPress/Elementor stranica uz potpunu konfiguraciju DNS-a, SSL-a i deploymenta.",
        },
        {
          period: "Svi. 2025. — Ruj. 2025.",
          role: "Tehničar za servisiranje",
          company: "Hrvatski Telekom d.d.",
          summary:
            "Testiranje i ažuriranje firmwarea opreme za obnovu — modema, set-top box uređaja i Wi-Fi mesh jedinica.",
        },
        {
          period: "Stu. 2023. — Sij. 2024.",
          role: "Junior System Administrator",
          company: "Combis d.o.o.",
          summary:
            "Nadzor performansi sustava, pregled sistemskih zapisa, upravljanje korisnicima u Active Directoryju te rješavanje hardverskih i softverskih problema.",
        },
      ],
    },
    contact: {
      title: "Izgradimo nešto zajedno.",
      sub: "Imaš projekt, poziciju ili samo želiš pozdraviti? Moj inbox je uvijek otvoren.",
    },
    form: {
      intentQuestion: "Što te dovodi?",
      intentLabels: {
        project: "Projekt",
        job: "Poslovna prilika",
        hello: "Samo pozdrav",
      },
      messageQuestion: "Ukratko mi opiši",
      messagePlaceholders: {
        project: "Rečenica-dvije o projektu…",
        job: "Pozicija, tim, sve što je relevantno…",
        hello: "Samo naprijed :)",
      },
      nameQuestion: "Tvoje ime",
      namePlaceholder: "Ivan Horvat",
      emailQuestion: "Tvoj email",
      emailPlaceholder: "ti@primjer.com",
      stepOf: "Korak {n} od {total}",
      back: "Natrag",
      next: "Dalje",
      send: "Pošalji",
      sending: "Šaljem…",
      successTitle: "Hvala — javit ću se unutar 48 h.",
      successSub: "Tvoja poruka je na putu.",
      sendAnother: "Pošalji još jednu",
      errorMessage: "Nešto je pošlo po zlu. Pokušaj ponovno.",
      retry: "Pokušaj ponovno",
      orDirect: "Radije mailom? Piši mi izravno:",
      errors: {
        message: "Napiši između 10 i 2000 znakova.",
        name: "Unesi svoje ime (2–100 znakova).",
        email: "Unesi ispravnu email adresu.",
      },
    },
  },
};
