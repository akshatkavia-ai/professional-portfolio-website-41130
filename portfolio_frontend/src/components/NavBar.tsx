"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

/**
 * PUBLIC_INTERFACE
 * NavBar
 * A fixed top navigation with brand and anchor links to page sections.
 * Includes a responsive mobile menu and accessible semantics.
 */
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu on hash navigation and Escape
  useEffect(() => {
    const onHash = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Sync data-state for CSS transitions
  useEffect(() => {
    const el = panelRef.current;
    if (el) el.setAttribute("data-state", open ? "open" : "closed");
  }, [open]);

  return (
    <nav
      className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur border-b border-white/10"
      aria-label="Primary"
    >
      <div className="container-pro h-16 flex items-center justify-between">
        <Link href="/" aria-label="Home" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-black font-extrabold">O</span>
          <span className="text-white font-semibold tracking-wide">Ocean Pro</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full px-3 py-2 font-semibold transition-colors bg-transparent text-white border border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <ul id="primary-menu" className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md px-1 py-0.5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu with CSS transition */}
      <div
        ref={panelRef}
        className="md:hidden border-t border-white/10 bg-black/80 mobile-menu"
      >
        <ul className="container-pro py-3 space-y-2" role="menu">
          {links.map((l) => (
            <li key={l.href} role="none">
              <a
                role="menuitem"
                href={l.href}
                className="block px-2 py-2 text-gray-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
