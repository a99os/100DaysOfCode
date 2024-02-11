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
      red: "#4e0707",
      lightGreen: "#98fb98",
      opcBlack: "#000000c7",
      transparent: "transparent",
      darkYellow: "#ffef00",
      blue: "#2832c2",
    },
    fontSize: {
      prm: "24px",
    },
  },
};
