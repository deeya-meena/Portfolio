import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#4F6EF7", // Primary blue accent
          600: "#3B52E1",
          700: "#2A3BB8",
          800: "#1E2991",
          900: "#182073",
          950: "#0D1342",
        },
        dark: {
          bg: "#080C14",
          card: "#0F172A",
          border: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Menlo", "Monaco", "monospace"],
      },
      animation: {
        "blob-spin": "blob-spin 12s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float-gentle": "float-gentle 6s ease-in-out infinite",
        "float-card-1": "float-card-1 6s ease-in-out infinite",
        "float-card-2": "float-card-2 7s ease-in-out infinite",
        "float-card-3": "float-card-3 8s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "blob-spin": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.15)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-card-1": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-card-2": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-card-3": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "vercel-glow": "0 0 50px -10px rgba(79, 110, 247, 0.35)",
        "glass-premium": "0 20px 50px -15px rgba(0, 0, 0, 0.05), 0 0 30px -10px rgba(79, 110, 247, 0.1)",
        "glass-dark": "0 20px 50px -15px rgba(0, 0, 0, 0.5), 0 0 35px -10px rgba(79, 110, 247, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
