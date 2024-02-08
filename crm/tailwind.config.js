/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      bgPrimary: "#080b38",
      hoverColor: "#133155",
      colorPrimary: "#feedd9",
      activeColor: "#f8ac8c",
      green: "#00563f",
      transparent: "transparent",
    },
    fontSize: {
      prm: "24px",
    },
  },
  plugins: [],
};
