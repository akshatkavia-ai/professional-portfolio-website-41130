export type Education = {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location?: string;
  grade?: string;
  highlights?: string[];
  url?: string;
};

/**
 * PUBLIC_INTERFACE
 * educationList
 * Education items to render in the Education section.
 * Replace with user-provided education data.
 */
export const educationList: Education[] = [
  {
    institution: "University of Example",
    degree: "B.Sc.",
    field: "Computer Science",
    period: "2016 — 2020",
    location: "Example City",
    highlights: ["Graduated with Honors", "CS Club President"],
    url: "https://www.example.edu",
  },
];
