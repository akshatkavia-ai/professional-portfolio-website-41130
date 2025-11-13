import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Carter • Frontend Engineer",
  description: "Professional portfolio showcasing projects, skills, and contact information.",
  openGraph: {
    title: "Alex Carter • Frontend Engineer",
    description: "Professional portfolio showcasing projects, skills, and contact information.",
    type: "website",
    url: "http://localhost:3000",
  },
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
