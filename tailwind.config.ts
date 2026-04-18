import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#C19A6B",
      },
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
