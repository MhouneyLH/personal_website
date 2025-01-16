/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A192F",
        slate: "#8892B0",
        "light-slate": "#CCD6F6",
        "lightest-slate": "#E6F1FF",
        accent: "#64FFDA",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#8892B0",
            a: {
              color: "#64FFDA",
              "&:hover": {
                color: "#64FFDA",
                opacity: 0.8,
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/", // Change this if deploying to GitHub Pages with a custom domain
});
