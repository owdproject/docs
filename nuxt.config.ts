// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],
  compatibilityDate: '2024-04-03',

  site: {
    url: 'https://owdproject.org',
    name: 'Open Web Desktop Docs'
  },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/test-utils"
  ],
  content: {
    experimental: { nativeSqlite: true }
  },
  css: [
    './app/assets/css/tokens.css',
    './app/assets/css/panel.css'
  ]
})