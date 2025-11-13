import { skillsByCategory } from "@/lib/content/skills";

/**
 * PUBLIC_INTERFACE
 * SkillsGrid
 * Shows skill chips grouped by category.
 */
export default function SkillsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillsByCategory.map((group) => (
        <section tabIndex={0} key={group.category} className="card-surface p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
          <h3 className="text-xl font-semibold mb-3">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
