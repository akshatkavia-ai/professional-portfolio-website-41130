export type SkillsGroup = {
  category: string;
  skills: string[];
};

/**
 * PUBLIC_INTERFACE
 * skillsByCategory
 * Skills grouped by category for the SkillsGrid component.
 * This export is consumed statically; keep the array and type stable.
 *
 * Order and labels must match the requested specification exactly.
 */
export const skillsByCategory: SkillsGroup[] = [
  {
    category: "Frontend Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend Technologies",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Prisma ORM"],
  },
  {
    category: "Other Skills",
    skills: [
      "Python",
      "C",
      "Data Analytics",
      "OpenCV",
      "YOLOv5",
      "Google Maps API",
      "Deep Learning",
      "CI/CD",
      "Unit Testing",
      "Accessibility (a11y)",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Vercel",
      "Netlify",
      "AWS",
      "VS Code",
      "Jupyter Notebook",
      "Atlassian Jira"
    ],
  },
];
