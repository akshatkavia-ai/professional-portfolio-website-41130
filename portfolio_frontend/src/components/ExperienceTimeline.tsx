import { experiences } from "@/lib/content/experience";

/**
 * PUBLIC_INTERFACE
 * ExperienceTimeline
 * Vertical timeline of roles/companies/durations/highlights.
 */
export default function ExperienceTimeline() {
  return (
    <ol className="relative border-s border-white/10">
      {experiences.map((exp, idx) => (
        <li key={`${exp.company}-${idx}`} className="ms-6 py-6">
          <span className="absolute -start-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-black ring-2 ring-black" />
          <div tabIndex={0} className="card-surface p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold">
                {exp.role} — <span className="text-gray-300">{exp.company}</span>
              </h3>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>
            <p className="text-gray-300 mt-2">{exp.summary}</p>
            {exp.highlights?.length ? (
              <ul className="mt-3 list-disc ps-5 text-gray-300">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
