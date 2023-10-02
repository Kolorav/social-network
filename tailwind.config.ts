import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "740px" },
      xxsm: { max: "320px" },
    },

    extend: {
      colors: {
        light: "#e6f5fb",
        dark: "#233d52",
      },
    },
  },
  plugins: [],
};
export default config;
