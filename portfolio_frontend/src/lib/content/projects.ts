export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
  docs?: string;
  /** Optional cover image path for cards (static export friendly) */
  cover?: string;
};

/**
 * PUBLIC_INTERFACE
 * projects
 * Placeholder project content to render in the ProjectsGrid.
 */
export const projects: Project[] = [
  {
    slug: "ocean-analytics",
    title: "Ocean Analytics",
    subtitle: "Real-time dashboard",
    description:
      "A high-performance analytics dashboard with live data visualizations and a11y-first interactions.",
    tags: ["Next.js", "TypeScript", "Charts"],
    live: "#",
    repo: "#",
    cover: "/og-image.png",
  },
  {
    slug: "wave-ui",
    title: "Wave UI",
    subtitle: "Design system",
    description:
      "A bold design system with reusable components, tokens, and dark-mode optimized palettes.",
    tags: ["Storybook", "Tailwind", "Accessibility"],
    live: "#",
    repo: "#",
  },
  {
    slug: "tide-automation",
    title: "Tide Automation",
    subtitle: "Workflow engine",
    description:
      "No-code workflow builder with drag-and-drop nodes and automated deployment pipelines.",
    tags: ["React", "DnD", "Automation"],
    live: "#",
    repo: "#",
  },
];
