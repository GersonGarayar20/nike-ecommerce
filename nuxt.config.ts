// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  /* routeRules:{
    "/productos/*":{ssr:false},
    "/api/*":{cors: true}
  } */
});
