import { certificates as certificatesData } from "@/lib/content/certificates";

/**
 * PUBLIC_INTERFACE
 * CertificatesSection
 * Displays certificates in a responsive card grid with verification links.
 */
export default function CertificatesSection() {
  const data = Array.isArray(certificatesData) ? certificatesData : [];

  if (!data.length) {
    return (
      <div className="card-surface p-6 text-gray-300">
        No certificates to display yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((c, idx) => (
        <article
          tabIndex={0}
          key={`${c.name}-${idx}`}
          className="card-surface p-6 h-full flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <header className="mb-2">
            <h3 className="text-lg font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-400">
              {c.issuer}
              {c.issueDate ? ` • ${c.issueDate}` : ""}
              {c.credentialId ? ` • ID: ${c.credentialId}` : ""}
            </p>
          </header>
          {c.skills?.length ? (
            <div className="mb-4 flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-auto">
            {c.verifyUrl ? (
              <a
                className="btn btn-secondary"
                href={c.verifyUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Verify certificate ${c.name}`}
              >
                Verify
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
