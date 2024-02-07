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
        transparent:"transparent",
        purple: 'hsl(259,100%,65%)',
        light_red: 'hsl(0,100%,67%)',
        off_white: 'hsl(0,0%,94%)',
        light_grey: 'hsl(0,0%,86%)',
        smokey_grey: 'hsl(0,1%,44%)',
        off_black: 'hsl(0,0%,8%)'      
      },
    },
    plugins: [],
  }