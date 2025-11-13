import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-6">
      <div className="card-surface p-10 text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-2">404 – Page Not Found</h1>
        <p className="text-gray-300 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold transition-colors bg-[color:var(--primary)] text-black hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Go Home
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold transition-colors bg-transparent text-white border border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
