// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.scss'],
  plugins: [
    '~/plugins/direction-control' // your plugins file name
    // other plugins
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },
  i18n: {
    /* module options */
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English (US)',
        file: 'en.json'
      },
      {
        code: 'he',
        iso: 'he-IL',
        name: 'עברית',
        file: 'he.json',
        dir: 'rtl'
      }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.options.ts'
  }
});
