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
        <article key={p.slug} className="card-surface p-6 h-full flex flex-col">
          <header className="mb-3">
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
                className="inline-flex items-center justify-center rounded-full px-4 py-2 font-semibold transition-colors bg-transparent text-white border border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2"
                href={p.live}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            )}
            {p.repo && (
              <a
                className="inline-flex items-center justify-center rounded-full px-4 py-2 font-semibold transition-colors bg-transparent text-white border border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2"
                href={p.repo}
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
