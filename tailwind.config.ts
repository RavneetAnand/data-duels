import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStopPositions: {
        33: "33%",
      },
      colors: {
        "accent-1": "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "dark", "light"],
  },
};
export default config;
