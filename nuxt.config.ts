// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,

  // Additional configurations for GitHub Pages deployment
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/udemy_clone/' : '/',
  },
});
