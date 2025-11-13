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
 * User-provided project content to render in the ProjectsGrid.
 */
export const projects: Project[] = [
  {
    slug: "shopnest",
    title: "Shopnest",
    subtitle: "Full-stack e-commerce platform",
    description:
      "A production-ready e-commerce application with product listings, cart, checkout, and order management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    live: "",
    repo: "https://github.com/shishir-09/Shopnest-ecom",
    cover: "/og-image.png",
  },
  {
    slug: "helmet-pothole-detection",
    title: "Helmet and Pothole Detection",
    subtitle: "Computer vision safety system",
    description:
      "Real-time detection of helmet usage and potholes using deep learning to enhance road safety.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    live: "",
    repo: "",
    cover: "/og-image.png",
  },
  {
    slug: "gitnavi",
    title: "GitNavi",
    subtitle: "AI-assisted Git command navigator",
    description:
      "An AI-powered assistant that helps developers discover, compose, and execute Git commands efficiently.",
    tags: ["Node.js", "TypeScript", "CLI"],
    live: "",
    repo: "",
    cover: "/og-image.png",
  },
  {
    slug: "pawguard",
    title: "PawGuard",
    subtitle: "Lost pet recovery platform",
    description:
      "A community-driven platform to report, locate, and reunite lost pets with their owners.",
    tags: ["React", "Firebase", "Maps"],
    live: "",
    repo: "",
    cover: "/og-image.png",
  },
];
