"use client";
import React from "react";
import { Button } from "./Button";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const Navbar: React.FC = () => {
  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 backdrop-blur bg-black/60">
      <nav className="container max-w-6xl flex items-center justify-between py-3">
        <div className="text-lg font-bold">
          <span className="text-primary">{"<"}</span>
          Portfolio
          <span className="text-secondary">{"/>"}</span>
        </div>
        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => onNav(s.id)}
                className="text-sm text-gray-300 hover:text-white focus-outline"
                aria-label={`Go to ${s.label}`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button variant="primary" onClick={() => onNav("projects")} aria-label="View Projects">
            View Projects
          </Button>
        </div>
      </nav>
    </header>
  );
};
