// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
    'nuxt-lucide-icons',
  ],
  runtimeConfig: { // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  primevue: {
    importTheme: { from: '@/assets/theme.ts' },
    options: {
      inputVariant: 'filled',
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
