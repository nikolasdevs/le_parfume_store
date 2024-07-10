import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "682": "170.5rem",
      },
    },
    colors: {
      peach: {
        100: "#F9E9E6",
      },
      neutral: {
        100: "#fff",
        200: "#4F4D63",
        300: "#877B7A",
      },
      danger: {
        100: "#CF3D29",
        200: "#D2481D",
      },
    },
    fontFamily: {
      display: "Cormorant Garamond",
      body: "Montserrat",
      // altText: "Allura",
    },
  },

  plugins: [],
};
export default config;
