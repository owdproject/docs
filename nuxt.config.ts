import legacyRoutes from './config/legacy-routes.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],
  compatibilityDate: '2024-04-03',

  site: {
    url: 'https://owdproject.org',
    name: 'Open Web Desktop'
  },

  routeRules: Object.fromEntries(
    Object.entries(legacyRoutes).map(([from, to]) => [from, { redirect: to }]),
  ),
  nitro: { prerender: { routes: [...Object.keys(legacyRoutes), ...Object.values(legacyRoutes)] } },

  llms: { domain: 'https://owdproject.org' },

  devtools: { enabled: true },

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
})
