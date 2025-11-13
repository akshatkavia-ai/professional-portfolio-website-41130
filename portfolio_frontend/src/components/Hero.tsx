import Image from "next/image";

/**
 * PUBLIC_INTERFACE
 * Hero
 * Gradient hero section with name/title, brief intro, and CTA buttons to
 * projects and contact sections, plus a placeholder image.
 */
export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div>
        <span className="chip mb-3">Available for contracts</span>
        <h1 className="mb-4">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400">
            Your Name
          </span>
        </h1>
        <p className="mb-8">
          I design and build bold, accessible web experiences. Focused on React,
          TypeScript, and performant, inclusive interfaces.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
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
