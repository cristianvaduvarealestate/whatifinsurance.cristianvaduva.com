import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: "#06141B", // Primary background, deep cinematic navy
          dark: "#11212D",    // Secondary surfaces, navigation, layered sections
          surface: "#253745", // Cards, panels, elevated surfaces
          border: "#4A5C6A",  // Secondary elements, borders & visual depth
          muted: "#9BA8AB",   // Muted typography, subtle icons & supporting labels
          light: "#CCDDCF",   // Light text, selected highlights & soft contrast
          neutral: "#2A2A2A", // Neutral dark surfaces where appropriate
          silver: "#C0C0C0",  // Metallic silver accents, dividers & premium details
          risk: "#E10600",    // Controlled risk, warning & financial-impact accent
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        'glow-silver': '0 0 25px -5px rgba(192, 192, 192, 0.2)',
        'glow-risk': '0 0 25px -5px rgba(225, 6, 0, 0.35)',
        'elevated': '0 20px 45px -15px rgba(6, 20, 27, 0.85)',
      },
    },
  },
  plugins: [],
};

export default config;
