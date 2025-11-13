export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Analytics Dashboard",
    description: "A responsive analytics dashboard with real-time charts and role-based access.",
    image: "/images/placeholder-project-1.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: "p2",
    title: "E-commerce Storefront",
    description: "Headless storefront with product search, filters, and Stripe checkout.",
    image: "/images/placeholder-project-2.jpg",
    tech: ["React", "Next.js", "Stripe", "SWR"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: "p3",
    title: "Portfolio Generator",
    description: "CLI and web app to generate developer portfolios from JSON configs.",
    image: "/images/placeholder-project-3.jpg",
    tech: ["Node.js", "Next.js", "Tailwind"],
    demoUrl: "#",
    codeUrl: "#"
  }
];

export type Skill = {
  name: string;
  level: number; // 0-100
  category: "Frontend" | "Backend" | "DevOps" | "Design" | "Other";
};

export const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 78, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Backend" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "GitHub Actions", level: 60, category: "DevOps" },
  { name: "Figma", level: 55, category: "Design" }
];
