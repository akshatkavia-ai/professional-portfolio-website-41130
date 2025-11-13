export type SkillsGroup = {
  category: string;
  skills: string[];
};

/**
 * PUBLIC_INTERFACE
 * skillsByCategory
 * Placeholder skill groups to render in the SkillsGrid.
 */
export const skillsByCategory: SkillsGroup[] = [
  { category: "Languages", skills: ["TypeScript", "JavaScript", "Python"] },
  { category: "Frameworks", skills: ["Next.js", "React", "Node.js"] },
  { category: "Tools", skills: ["Git", "Docker", "Vercel", "CI/CD"] },
  { category: "Design", skills: ["Accessibility", "Figma", "Design Systems"] },
  { category: "Data", skills: ["REST", "GraphQL", "WebSockets"] },
  { category: "Testing", skills: ["Jest", "Playwright", "Vitest"] },
];
