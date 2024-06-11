// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: [
    "vuetify/lib/styles/main.sass"
  ],
  build: {
      transpile: ["vuetify"]
  },
  vite: {
    define: {
        "process.env.DEBUG": false
    },
    // for HMR
    server: {
        watch: {
            usePolling: true
        }
    },
  }
})
