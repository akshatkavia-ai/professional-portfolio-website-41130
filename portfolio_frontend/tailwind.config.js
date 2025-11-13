/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#1F2937",
        primary: "#F97316",
        secondary: "#10B981",
        success: "#10B981",
        error: "#EF4444",
        text: "#FFFFFF"
      },
      boxShadow: {
        glow: "0 0 30px rgba(249, 115, 22, 0.2)"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem"
      }
    },
    container: {
      center: true,
      padding: "1rem"
    }
  },
  plugins: []
}
