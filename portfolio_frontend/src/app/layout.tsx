import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Akshat Mishra — Portfolio",
    template: "%s | Akshat Mishra",
  },
  description:
    "Portfolio of Akshat Mishra — building bold, accessible web experiences with Next.js, TypeScript, and a11y-first design.",
  applicationName: "Akshat Mishra — Portfolio",
  authors: [{ name: "Akshat Mishra" }],
  themeColor: "#000000",
  openGraph: {
    title: "Akshat Mishra — Portfolio",
    description:
      "Portfolio of Akshat Mishra — building bold, accessible web experiences with Next.js, TypeScript, and a11y-first design.",
    url: "/",
    siteName: "Akshat Mishra — Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Portfolio preview for Akshat Mishra" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Mishra — Portfolio",
    description:
      "Portfolio of Akshat Mishra — building bold, accessible web experiences with Next.js, TypeScript, and a11y-first design.",
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
