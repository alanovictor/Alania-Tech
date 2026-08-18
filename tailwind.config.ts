import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05070c",
          900: "#05070c",
          800: "#0a0e17",
          700: "#0d1420",
          600: "#121b2b",
          500: "#1a2536",
        },
        brand: {
          blue: "#1c8dff",
          cyan: "#4fd7f5",
          deep: "#0a4fb0",
        },
        mist: "#8fa1b8",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1c8dff 0%, #4fd7f5 100%)",
        "triangle-gradient": "linear-gradient(160deg, rgba(28,141,255,0.55) 0%, rgba(79,215,245,0.35) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(28,141,255,0.35)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
