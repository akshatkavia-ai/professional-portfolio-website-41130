import { getHealthcheckPath } from "@/lib/config/env";

/**
 * PUBLIC_INTERFACE
 * HealthPage
 * A static-friendly healthcheck page that returns an OK indicator. The route
 * path is /health by default. It does not use any server-only APIs to preserve
 * Next.js export compatibility.
 */
export default function HealthPage() {
  // This is static; we keep it simple for export compatibility.
  // getHealthcheckPath is imported to ensure it's tree-shaken and typed, though
  // the route path is fixed by its file location.
  void getHealthcheckPath;

  return (
    <div className="min-h-40 container-pro py-16">
      <div className="card-surface p-6">
        <h1 className="text-2xl font-bold mb-2">OK</h1>
        <p className="text-gray-300">
          The portfolio frontend is healthy. If you reached this page via the configured
          healthcheck path, the app is up and serving static content.
        </p>
      </div>
    </div>
  );
}
