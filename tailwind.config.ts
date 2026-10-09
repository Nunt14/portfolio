import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#F4FAFF",
          100: "#E6F4FF",
          200: "#CDE9FF",
          300: "#A9D9FF",
          400: "#7FC4FF",
        },
        highlight: "#FFE066",
        ink: "#1E2A3A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out 1.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
