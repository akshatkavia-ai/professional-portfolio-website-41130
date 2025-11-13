import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Ocean Professional Portfolio",
    template: "%s | Ocean Professional",
  },
  description:
    "Bold, accessible personal portfolio showcasing projects, skills, and experience.",
  applicationName: "Ocean Professional Portfolio",
  authors: [{ name: "Your Name" }],
  themeColor: "#000000",
  openGraph: {
    title: "Ocean Professional Portfolio",
    description:
      "Bold, accessible personal portfolio showcasing projects, skills, and experience.",
    url: "/",
    siteName: "Ocean Professional Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Portfolio preview" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ocean Professional Portfolio",
    description:
      "Bold, accessible personal portfolio showcasing projects, skills, and experience.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-black text-white ocean-radial" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <header role="banner" aria-label="Site header and navigation">
          <NavBar />
        </header>
        <main id="main-content" role="main" className="relative pt-20">
          {children}
        </main>
        <footer role="contentinfo" aria-label="Site footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
