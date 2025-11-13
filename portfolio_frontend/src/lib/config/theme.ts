export type ThemeTokens = {
  background: string;
  surface: string;
  text: string;
  primary: string;
  secondary: string;
  success: string;
  error: string;
  gradient: string;
};

/**
 * PUBLIC_INTERFACE
 * getThemeTokens
 * Returns the Ocean Professional theme tokens for use in components.
 */
export function getThemeTokens(): ThemeTokens {
  return {
    background: "#000000",
    surface: "#1F2937",
    text: "#FFFFFF",
    primary: "#F97316",
    secondary: "#10B981",
    success: "#10B981",
    error: "#EF4444",
    gradient: "from-orange-500/20 to-black",
  };
}
