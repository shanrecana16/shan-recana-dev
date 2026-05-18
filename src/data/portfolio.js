// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA — Edit everything in this file to personalize your portfolio
// ─────────────────────────────────────────────────────────────────────────────

const DATA = {
  // ── Personal Info ──────────────────────────────────────────────────────────
  name: "Shan Mickle Recaña",
  role: "Product Designer & Frontend Developer",
  tagline:
    "I create modern, responsive, and user-focused web experiences with clean design and solid frontend engineering.",
  email: "shanrecana16@gmail.com",
  phone: "+63 (999) 3666-4149",
  location: "Taguig City, Philippines",
  github: "https://github.com/shanrecana16",
  linkedin: "linkedin.com/in/alexrivera",
  //! website: "alexrivera.dev",

  // ── About paragraph ────────────────────────────────────────────────────────
  about:
    "Frontend developer continuously learning and building modern web applications with React and Next.js",

  // ── Stats shown in About section ──────────────────────────────────────────
  stats: [
    { number: "1+", label: "Years exp." },
    { number: "3+", label: "Projects" },
    { number: "2027", label: "Graduation" },
  ],

  // ── Skills (color: "accent" | "green" | "yellow") ─────────────────────────
  skills: [
    { name: "UI/UX Design", color: "accent" },
    { name: "React & TypeScript", color: "green" },
    { name: "Figma & Prototyping", color: "yellow" },
    { name: "Node.js & APIs", color: "accent" },
    { name: "Linux OS Deployment", color: "green" },
    { name: "Design Systems", color: "yellow" },
  ],

  // ── Tool tags shown in About section ──────────────────────────────────────
  tools: [
    "Figma",
    "React",
    "TypeScript",
    "Tailwind",
    "Next.js",
    "Framer Motion",
    "Flutter",
    "Photopshop",
    "Vercel",
    "Git",
    "Visual Basic .NET",
  ],

  // ── Work Experience (color: "accent" | "green" | "yellow") ───────────────
  experience: [
    {
      company: "Operations Customer Expert I",
      role: "Content Moderator",
      period: "2025 — 2026",
      desc: "Detail-oriented Content Moderator dedicated to maintaining safe, engaging, and high-quality online spaces. Strong eye for accuracy, community guidelines, and digital safety.",
      color: "accent",
    },
    {
      company: "Thesis Project",
      role: "Researcher & Compatibility Tester",
      period: "2025 — 2026",
      desc: "Researched and developed a web-based thesis project promoting Filipino language and culture through a modern, responsive user experience. Conducted compatibility testing across various devices and browsers to ensure accessibility and optimal performance.",
      color: "green",
    },
    {
      company: "IT Systems & Hardware Deployment",
      role: "Academic Project",
      period: "2023 — 2024",
      desc: "Successfully executed a bare-metal Linux installation on physical hardware. Managed BIOS/UEFI configuration, bootable media creation, and disk partitioning while ensuring full hardware compatibility.",
      color: "yellow",
    },
  ],

  // ── Projects (color: "accent" | "green" | "yellow" | "red") ──────────────
  projects: [
    {
      name: "Hiyas ng Salita",
      desc: "A web-based thesis project promoting Filipino language and culture through a modern, responsive user experience.",
      tags: ["React", "Javascript", "Storybook", "Postman", "Figma"],
      link: "https://hiyasngsalita.com",
      color: "accent",
      icon: "◈",
    },
  ],

  // ── Education ──────────────────────────────────────────────────────────────
  education: [
    {
      school: "STI - Pasay",
      degree: "B.S. Information Technology",
      year: "2023 - 2027",
    },
  ],

  // Certification //
  certifications: [
    {
      name: "Software QA Manual Testing Workshop",
      issuer: "MSTConnect",
      year: "2026",
      pdf: "/certs/Recana_ShanMickle.pdf",
      icon: "🎓",
      color: "yellow",
      credentialId: "MST-QA-2026-001",

    },
  ],
};

export default DATA;
