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
 * Certificates with verification URLs where applicable.
 * Replace with user-provided certificates.
 */
export const certificates: Certificate[] = [
  {
    name: "Example Professional Developer",
    issuer: "Example Institute",
    issueDate: "2022-08",
    credentialId: "ABC-123-XYZ",
    verifyUrl: "https://verify.example.com/cert/ABC-123-XYZ",
    skills: ["TypeScript", "React", "Web Accessibility"],
  },
];
