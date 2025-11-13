export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights?: string[];
};

/**
 * PUBLIC_INTERFACE
 * experiences
 * Placeholder experience timeline data to render in ExperienceTimeline.
 */
export const experiences: Experience[] = [
  {
    company: "Oceanic Labs",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    summary:
      "Leading UI architecture and accessibility initiatives for high-traffic SaaS dashboards.",
    highlights: [
      "Reduced bundle size by 28% through route-level code-splitting and design tokenization.",
      "Implemented comprehensive a11y standards and automated audits.",
    ],
  },
  {
    company: "WaveWorks",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    summary:
      "Built and maintained customer-facing portals with robust component libraries.",
    highlights: [
      "Shipped a reusable component library and dark-mode ready theming.",
      "Improved form UX with better validation, error states, and keyboard flows.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2019 — 2021",
    summary:
      "Delivered performant websites and apps for startups and agencies with a focus on bold visuals.",
  },
];
