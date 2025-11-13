type Nullable<T> = T | null;

// Define a narrow typing for injected runtime environments
type RuntimeEnv = Record<string, string | undefined>;
interface GlobalWithEnv {
  __ENV?: RuntimeEnv;
}
// Window typing with an optional ENV bag for runtime injection
declare global {
  interface Window {
    ENV?: RuntimeEnv;
  }
}

/**
 * Safely read a public env var on both server and client without throwing in browsers.
 * Order of precedence:
 * 1) globalThis.__ENV[name] if available (supports runtime injection)
 * 2) window.ENV[name] if available (browser-only injection)
 * 3) process.env[name] read guarded with typeof process !== 'undefined' (build-time inline for NEXT_PUBLIC_*)
 * 4) null if not found
 */
function safeReadPublicEnv(name: string): Nullable<string> {
  try {
    // 1) globalThis.__ENV
    const g = (typeof globalThis !== "undefined" ? (globalThis as unknown as GlobalWithEnv) : undefined);
    if (g && g.__ENV && typeof g.__ENV === "object") {
      const v = g.__ENV[name];
      if (typeof v === "string" && v.length > 0) return v;
    }
    // 2) window.ENV
    if (typeof window !== "undefined" && window.ENV && typeof window.ENV === "object") {
      const v = window.ENV[name];
      if (typeof v === "string" && v.length > 0) return v;
    }
    // 3) Build-time NEXT_PUBLIC_* (guarded)
    if (typeof process !== "undefined" && typeof process.env !== "undefined") {
      const val = (process.env as Record<string, string | undefined>)[name];
      if (typeof val === "string" && val.length > 0) {
        return val;
      }
    }
  } catch {
    // Never throw in client; return null if anything goes wrong.
  }
  return null;
}

/**
 * PUBLIC_INTERFACE
 * getFrontendUrl
 * Returns NEXT_PUBLIC_FRONTEND_URL, if set.
 */
export function getFrontendUrl(): Nullable<string> {
  return safeReadPublicEnv("NEXT_PUBLIC_FRONTEND_URL");
}

/**
 * PUBLIC_INTERFACE
 * getBackendUrl
 * Returns NEXT_PUBLIC_BACKEND_URL, if set.
 */
export function getBackendUrl(): Nullable<string> {
  return safeReadPublicEnv("NEXT_PUBLIC_BACKEND_URL");
}

/**
 * PUBLIC_INTERFACE
 * getApiBase
 * Returns the base API URL from NEXT_PUBLIC_API_BASE or NEXT_PUBLIC_BACKEND_URL.
 */
export function getApiBase(): Nullable<string> {
  return (
    safeReadPublicEnv("NEXT_PUBLIC_API_BASE") ??
    safeReadPublicEnv("NEXT_PUBLIC_BACKEND_URL")
  );
}

/**
 * PUBLIC_INTERFACE
 * getWebsocketUrl
 * Returns NEXT_PUBLIC_WS_URL, if set.
 */
export function getWebsocketUrl(): Nullable<string> {
  return safeReadPublicEnv("NEXT_PUBLIC_WS_URL");
}

/**
 * PUBLIC_INTERFACE
 * getNodeEnv
 * Returns NEXT_PUBLIC_NODE_ENV, if set.
 */
export function getNodeEnv(): Nullable<string> {
  return safeReadPublicEnv("NEXT_PUBLIC_NODE_ENV");
}

/**
 * PUBLIC_INTERFACE
 * getFeatureFlags
 * Parse NEXT_PUBLIC_FEATURE_FLAGS as JSON or comma-separated list into a string array.
 */
export function getFeatureFlags(): string[] {
  const val = safeReadPublicEnv("NEXT_PUBLIC_FEATURE_FLAGS");
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
  const p = safeReadPublicEnv("NEXT_PUBLIC_HEALTHCHECK_PATH");
  if (!p) return "/health";
  // Ensure it begins with a slash
  return p.startsWith("/") ? p : `/${p}`;
}
