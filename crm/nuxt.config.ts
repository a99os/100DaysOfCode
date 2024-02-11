// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "~/assets/css/main.css",
    "boxicons/css/boxicons.min.css",
    "vue-select/dist/vue-select.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt"],
  googleFonts: {
    families: {
      Jost: [400, 500, 600, 700],
    },
    // Options
  },
  // plugins: ["~/plugins/v-tooltip.js"],
});
