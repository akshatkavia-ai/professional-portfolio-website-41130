export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights?: string[];
  location?: string;
  links?: { label: string; url: string }[];
};

/**
 * PUBLIC_INTERFACE
 * experiences
 * User-provided experience timeline data to render in ExperienceTimeline.
 */
export const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 — Present",
    summary:
      "Building full-stack applications with modern web technologies; focusing on scalable, maintainable solutions.",
    highlights: [
      "Delivered multiple client projects with Next.js, Prisma, and PostgreSQL.",
      "Implemented CI/CD pipelines and Dockerized deployments for reliability."
    ],
  },
  {
    company: "Enigma",
    role: "Software Development Intern",
    period: "2022 — 2023",
    summary:
      "Contributed to web development tasks, bug fixes, and feature implementations under mentorship.",
    highlights: [
      "Improved existing components and optimized database queries.",
      "Participated in code reviews and documentation improvements."
    ],
  },
  {
    company: "DSC BITD",
    role: "Team Member",
    period: "2020 — 2022",
    summary:
      "Active member contributing to community projects and technical workshops.",
    highlights: [
      "Organized sessions and collaborated on open-source initiatives."
    ],
  },
];
