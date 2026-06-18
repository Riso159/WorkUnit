import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0b1b2f",
        steel: "#142b44",
        cyan: "#31d5e8",
        mist: "#eaf1f5",
      },
      boxShadow: {
        glow: "0 0 50px rgba(49, 213, 232, 0.14)",
        lift: "0 24px 70px rgba(5, 18, 32, 0.12)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 75% 25%, rgba(49,213,232,.18), transparent 32%), radial-gradient(circle at 15% 80%, rgba(34,93,150,.18), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;
