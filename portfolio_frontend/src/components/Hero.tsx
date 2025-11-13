import Image from "next/image";
import { socials } from "@/lib/content/socials";

/**
 * PUBLIC_INTERFACE
 * Hero
 * Gradient hero section with name/title, brief intro, and CTA buttons to
 * projects and contact sections, plus a placeholder image.
 */
export default function Hero() {
  // Render all provided social links; do not filter to avoid hiding user data
  const socialLinks = socials;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div>
        <span className="chip mb-3" aria-label="Availability status">Open to opportunities</span>
        <h1 className="mb-3 leading-tight">
          Hi, I’m{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400">
              Akshat Mishra
            </span>
            <span aria-hidden="true" className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-orange-500/70 to-emerald-500/70 rounded-full animate-pulse-slow"></span>
          </span>
        </h1>
        <p className="mb-8 max-w-prose">
          I craft bold, accessible web experiences—focused on Next.js, TypeScript, performance and inclusive UI. Currently open to impactful roles and collaborations.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn btn-primary">Explore Projects</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3" aria-label="Social links">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              className="chip hover:opacity-90"
              href={s.url.startsWith("http") ? s.url : `https://${s.url}`}
              target="_blank"
              rel="noreferrer"
              aria-label={s.title ?? `${s.label} link`}
              title={s.title ?? s.label}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/3] w-full card-surface overflow-hidden">
          <Image
            src="/og-image.png"
            alt="Decorative abstract ocean gradient"
            width={1200}
            height={900}
            className="h-full w-full object-cover opacity-90"
            priority
          />
        </div>
      </div>
    </div>
  );
}
