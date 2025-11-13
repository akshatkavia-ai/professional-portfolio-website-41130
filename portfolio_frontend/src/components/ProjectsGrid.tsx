import Image from "next/image";
import { projects } from "@/lib/content/projects";

/**
 * PUBLIC_INTERFACE
 * ProjectsGrid
 * Displays projects in responsive cards with titles, descriptions, tags,
 * and external links if present.
 */
export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article
          tabIndex={0}
          key={p.slug}
          className="group card-surface overflow-hidden h-full flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10">
            <Image
              src={p.cover ?? "/og-image.png"}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover opacity-90 transition duration-300 group-hover:scale-[1.03]"
              priority={false}
            />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.35) 100%)" }} />
          </div>
          <div className="p-6 flex flex-col flex-1 relative">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] ring-0 transition group-hover:ring-1" style={{ borderRadius: "inherit", boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--ring) 35%, transparent)" }}></div>
            <header className="mb-2">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              {p.subtitle && <p className="text-gray-400 text-sm">{p.subtitle}</p>}
            </header>
            <p className="text-gray-300 mb-4 flex-1">{p.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-auto">
              {p.live && (
                <a
                  className="btn btn-primary"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Demo
                </a>
              )}
              {p.repo && (
                <a
                  className="btn btn-secondary"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
