import { educationList } from "@/lib/content/education";

/**
 * PUBLIC_INTERFACE
 * EducationSection
 * Renders education history using the project's bold theme cards and accessible markup.
 */
export default function EducationSection() {
  return (
    <ol className="relative border-s border-white/10">
      {educationList.map((edu, idx) => (
        <li key={`${edu.institution}-${idx}`} className="ms-6 py-6">
          <span className="absolute -start-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-black ring-2 ring-black" />
          <div
            tabIndex={0}
            className="card-surface p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold">
                {edu.degree}
                {edu.field ? (
                  <>
                    {" "}
                    — <span className="text-gray-300">{edu.field}</span>
                  </>
                ) : null}
              </h3>
              <span className="text-sm text-gray-400">{edu.period}</span>
            </div>
            <p className="text-gray-300 mt-1">
              <span className="text-gray-200">{edu.institution}</span>
              {edu.location ? <span className="text-gray-400"> — {edu.location}</span> : null}
            </p>
            {edu.url ? (
              <p className="mt-2">
                <a
                  className="btn btn-secondary"
                  href={edu.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${edu.institution} website`}
                >
                  Institution
                </a>
              </p>
            ) : null}
            {edu.highlights?.length ? (
              <ul className="mt-3 list-disc ps-5 text-gray-300">
                {edu.highlights.map((h, i) => (
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
