import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)"],
        manrope: ["var(--font-manrope)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(270px, 1fr))",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",

        background: "var(--color-background)",

        border: "var(--color-border)",

        dark: "var(--color-dark)",
        "dark-secondary": "var(--color-dark-secondary)",
        "main-dark": "var(--color-main-dark)",

        "light-gray": "var(--color-light-gray)",

        "main-black": "var(--color-main-black)",

        "accent-blue": "var(--color-accent-blue)",
        "accent-purple": "var(--color-accent-purple)",
        "accent-green": "var(--color-accent-green)",
        "accent-orange": "var(--color-accent-orange)",

        "neutral-400": "var(--color-neutral-400)",
        "neutral-500": "var(--color-neutral-500)",
        "neutral-900": "var(--color-neutral-900)",
      },
    },
  },
  plugins: [],
};
export default config;
