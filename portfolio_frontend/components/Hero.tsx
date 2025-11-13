"use client";
import React from "react";
import { Button } from "./Button";

export const Hero: React.FC = () => {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section id="home" className="pt-28 section">
      <div className="container max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-secondary font-semibold mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Alex Carter
          </h1>
          <p className="mt-2 text-xl text-gray-300">Frontend Engineer</p>
          <p className="mt-5 text-gray-400">
            I build fast, accessible, and delightful web experiences with Next.js, React, and modern tooling.
          </p>
          <div className="mt-8 flex gap-4">
            <Button variant="primary" onClick={() => go("projects")}>View Projects</Button>
            <Button variant="secondary" onClick={() => go("contact")}>Contact Me</Button>
          </div>
        </div>
        <div className="rounded-2xl bg-surface p-8 border border-white/5 shadow-glow">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-500/20 to-black border border-white/5" />
          <p className="mt-4 text-sm text-gray-400">
            Placeholder visual. Replace with a professional portrait or brand graphic.
          </p>
        </div>
      </div>
    </section>
  );
};
