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
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Testing",
    skills: ["Jest", "Playwright", "Testing Library"],
  },
  {
    category: "Design",
    skills: ["Figma", "Design Systems", "Wireframing"],
  },
];
