module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#145DA0",
        "blue-dark": "#0C2D48",
        "blue-light": "#2E8BC0",
        light: "#B1D4E0",
      },
    },
  },
  plugins: [],
};
