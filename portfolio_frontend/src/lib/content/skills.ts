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
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend Technologies",
    skills: ["Next.js"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Database Management", "MySQL"],
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
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["VS Code", "Jupyter Notebook", "Atlassian Jira", "Git", "GitHub"],
  },
];
