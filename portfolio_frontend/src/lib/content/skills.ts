export type SkillsGroup = {
  category: string;
  skills: string[];
};

/**
 * PUBLIC_INTERFACE
 * skillsByCategory
 * Skills grouped by category for the SkillsGrid component.
 * This export is consumed statically; keep the array and type stable.
 */
export const skillsByCategory: SkillsGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility (a11y)",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Authentication & Authorization",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Docker",
      "Vercel",
      "CI/CD",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Redis (basics)",
    ],
  },
  {
    category: "Testing & Quality",
    skills: [
      "Jest",
      "Playwright",
      "Vitest",
      "Testing Library",
      "ESLint",
      "Prettier",
    ],
  },
  {
    category: "Design & Collaboration",
    skills: [
      "Figma",
      "Design Systems",
      "Wireframing",
      "Agile / Scrum",
      "Documentation",
    ],
  },
];
