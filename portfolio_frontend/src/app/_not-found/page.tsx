"use client";

import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * NotFoundPage
 * Dedicated not-found page component for the app/_not-found route to satisfy static export.
 * Presents a simple 404 message and link back to home.
 */
export default function NotFoundPage() {
  return (
    <div className="container-pro py-24 text-center">
      <h1 className="text-4xl font-extrabold mb-3">Page not found</h1>
      <p className="text-gray-400 mb-8">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Go home
      </Link>
    </div>
  );
}
