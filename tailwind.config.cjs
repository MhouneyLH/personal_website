module.exports = {
  darkMode: "class", // Enable dark mode using the 'class' strategy
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#1e293b",
          text: "#ffffff",
          accent: "#4ade80",
          glow: "#4ade80",
        },
      },
    },
  },
  plugins: [],
};
