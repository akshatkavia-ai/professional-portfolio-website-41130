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
 * Replace these placeholders with actual profile links.
 */
export const socials: Social[] = [
  {
    label: "GitHub",
    title: "Visit my GitHub profile",
    url: "https://github.com/your-username",
    icon: "github",
  },
  {
    label: "LinkedIn",
    title: "Connect with me on LinkedIn",
    url: "https://www.linkedin.com/in/your-handle",
    icon: "linkedin",
  },
  {
    label: "Website",
    title: "Personal website",
    url: "https://your-website.example.com",
    icon: "website",
  },
];
