"use client";

import { useEffect } from "react";

/**
 * PUBLIC_INTERFACE
 * ClientReveal
 * Adds intersection-observer 'reveal' animations, and updates CSS variable
 * --scrollProgress for the compact top progress indicator. Respects
 * prefers-reduced-motion.
 */
export function ClientReveal() {
  useEffect(() => {
    const docEl = document.documentElement;
    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll progress CSS var
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      docEl.style.setProperty("--scrollProgress", p.toString());
    };
    updateProgress();

    // Reveal animation via IntersectionObserver
    let observer: IntersectionObserver | null = null;
    if (!prefersReduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
      );
      document.querySelectorAll(".reveal").forEach((el) => observer?.observe(el));
    } else {
      // If reduced motion, show immediately
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
