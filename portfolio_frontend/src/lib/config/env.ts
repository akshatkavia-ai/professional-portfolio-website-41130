type Nullable<T> = T | null;

function readEnv(name: string): Nullable<string> {
  const env = process.env as Record<string, string | undefined>;
  if (typeof window !== "undefined") {
    // prefer injected NEXT_PUBLIC_ vars at runtime if available
    return env[name] ?? null;
  }
  return env[name] ?? null;
}

/**
 * PUBLIC_INTERFACE
 * getFrontendUrl
 * Returns NEXT_PUBLIC_FRONTEND_URL, if set.
 */
export function getFrontendUrl(): Nullable<string> {
  return readEnv("NEXT_PUBLIC_FRONTEND_URL");
}

/**
 * PUBLIC_INTERFACE
 * getBackendUrl
 * Returns NEXT_PUBLIC_BACKEND_URL, if set.
 */
export function getBackendUrl(): Nullable<string> {
  return readEnv("NEXT_PUBLIC_BACKEND_URL");
}

/**
 * PUBLIC_INTERFACE
 * getApiBase
 * Returns the base API URL from NEXT_PUBLIC_API_BASE or NEXT_PUBLIC_BACKEND_URL.
 */
export function getApiBase(): Nullable<string> {
  return readEnv("NEXT_PUBLIC_API_BASE") ?? readEnv("NEXT_PUBLIC_BACKEND_URL");
}

/**
 * PUBLIC_INTERFACE
 * getWebsocketUrl
 * Returns NEXT_PUBLIC_WS_URL, if set.
 */
export function getWebsocketUrl(): Nullable<string> {
  return readEnv("NEXT_PUBLIC_WS_URL");
}

/**
 * PUBLIC_INTERFACE
 * getNodeEnv
 * Returns NEXT_PUBLIC_NODE_ENV, if set.
 */
export function getNodeEnv(): Nullable<string> {
  return readEnv("NEXT_PUBLIC_NODE_ENV");
}

/**
 * PUBLIC_INTERFACE
 * getFeatureFlags
 * Parse NEXT_PUBLIC_FEATURE_FLAGS as JSON or comma-separated list into a string array.
 */
export function getFeatureFlags(): string[] {
  const val = readEnv("NEXT_PUBLIC_FEATURE_FLAGS");
  if (!val) return [];
  try {
    const parsed = JSON.parse(val);
    if (Array.isArray(parsed)) {
      return parsed.map(String);
    }
    if (typeof parsed === "object" && parsed !== null) {
      const rec = parsed as Record<string, unknown>;
      return Object.keys(rec).filter((k) => Boolean(rec[k]));
    }
  } catch {
    // Fall through to CSV parsing
  }
  return val
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * PUBLIC_INTERFACE
 * getHealthcheckPath
 * Returns the healthcheck path configured via NEXT_PUBLIC_HEALTHCHECK_PATH,
 * defaulting to "/health".
 */
export function getHealthcheckPath(): string {
  const p = readEnv("NEXT_PUBLIC_HEALTHCHECK_PATH");
  if (!p) return "/health";
  // Ensure it begins with a slash
  return p.startsWith("/") ? p : `/${p}`;
}
