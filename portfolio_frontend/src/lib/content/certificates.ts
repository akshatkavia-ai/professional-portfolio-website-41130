export type Certificate = {
  name: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  skills?: string[];
};

/**
 * PUBLIC_INTERFACE
 * certificates
 * User-provided certificates with verification URLs where applicable.
 */
export const certificates: Certificate[] = [
  {
    name: "Python for Machine Learning",
    issuer: "Great Learning",
    issueDate: "2021-06",
    credentialId: "",
    verifyUrl: "https://olympus1.mygreatlearning.com/courses/12345",
    skills: ["Python", "Pandas", "Machine Learning Basics"],
  },
  {
    name: "Frontend Development",
    issuer: "FreeCodeCamp",
    issueDate: "2020-12",
    credentialId: "",
    verifyUrl: "https://www.freecodecamp.org/certification/abcdef",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];
