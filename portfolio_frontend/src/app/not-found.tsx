import type { Viewport } from "next";
import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * NotFound
 * Default 404 page for the app directory. Provides clear messaging and quick actions.
 */
export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-6">
      <div className="card-surface p-10 text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-2">404 — Page Not Found</h1>
        <p className="text-gray-300 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary" aria-label="Go back to homepage">
            Go Home
          </Link>
          <a href="#contact" className="btn btn-secondary" aria-label="Jump to contact section">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
