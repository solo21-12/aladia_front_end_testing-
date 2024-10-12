// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: [
    "@fortawesome/fontawesome-free/css/all.css", // FontAwesome
    "vuetify/styles",
    "~/assets/css/tailwind.css", // Vuetify styles
  ],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
  vite: {
    server: {
      hmr: {
        clientPort: 3000, // Ensures HMR uses the correct port
      },
    },
    define: {
      "process.env.DEBUG": false, // Required for Vuetify to avoid warnings
    },
  },
  build: {
    transpile: ["vuetify"], // Ensures Vuetify gets transpiled
  },
  plugins: ["~/plugins/vuetify.js"], // Register the Vuetify plugin
});
