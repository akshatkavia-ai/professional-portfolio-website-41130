export type Social = {
  /** Human-readable label, e.g., 'GitHub' */
  label: string;
  /** Accessible title for the link */
  title?: string;
  /** External URL */
  url: string;
  /** Optional icon name if theming adds icons later */
  icon?: "github" | "linkedin" | "twitter" | "website" | "email" | "other";
};

/**
 * PUBLIC_INTERFACE
 * socials
 * Social links to render in Hero/Footer or any social bar.
 * Provided by user; ensure LinkedIn has https scheme.
 */
export const socials: Social[] = [
  {
    label: "GitHub",
    title: "Visit my GitHub profile",
    url: "https://github.com/shishir-09",
    icon: "github",
  },
  {
    label: "LinkedIn",
    title: "Connect with me on LinkedIn",
    url: "https://www.linkedin.com/in/shishir-09",
    icon: "linkedin",
  },
  {
    label: "Website",
    title: "Personal website",
    url: "https://shishir.dev",
    icon: "website",
  },
];
