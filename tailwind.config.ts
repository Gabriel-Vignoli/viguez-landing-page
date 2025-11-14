import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'mobile': '20px',
        'tablet': '40px',
        'laptop': '80px',
        'desktop': '120px',
        'big': '214px',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;