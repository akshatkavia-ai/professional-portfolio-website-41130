import { skillsByCategory as skillsData } from "@/lib/content/skills";

/**
 * PUBLIC_INTERFACE
 * SkillsGrid
 * Shows skill chips grouped by category.
 */
export default function SkillsGrid() {
  // Normalize to avoid runtime errors if content import is undefined/null
  const groups = Array.isArray(skillsData) ? skillsData : [];

  if (!groups.length) {
    return (
      <div className="card-surface p-6 text-gray-300">
        No skills to display yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <section
          tabIndex={0}
          key={group.category}
          className="card-surface p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <h3 className="text-xl font-semibold mb-3">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {(group.skills ?? []).map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
