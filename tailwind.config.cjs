import themes from "./src/themes";

module.exports = {
  darkMode: "class", // Enable dark mode using the 'class' strategy
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: themes.accentOnlyDarkTheme.colors,
      },
    },
  },
  plugins: [],
};
