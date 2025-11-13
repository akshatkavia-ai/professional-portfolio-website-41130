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
    institution: "Bhilai Institute Of Technology, Durg",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    period: "2019 — 2023",
    location: "Durg, Chhattisgarh, India",
    grade: "CGPA: 8.5/10",
    url: "https://www.bitdurg.ac.in/",
  },
];
