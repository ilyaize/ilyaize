export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp;

  vueApp.provide('setDirection', (newLocale) => {
    const dir = vueApp.config.globalProperties.$i18n.locales.find((locale) => locale.code === newLocale)?.dir || 'ltr';
    document.documentElement.setAttribute('dir', dir);
  });

  vueApp.mixin({
    watch: {
      '$i18n.locale'(newLocale) {
        vueApp.config.globalProperties.$i18n.locales.find((locale) => locale.code === newLocale)?.dir ? document.documentElement.setAttribute('dir', 'rtl') : document.documentElement.setAttribute('dir', 'ltr');
      }
    },
    mounted() {
      this.$watch('$i18n.locale', (newLocale) => {
        this.$i18n.locales.find((locale) => locale.code === newLocale)?.dir ? document.documentElement.setAttribute('dir', 'rtl') : document.documentElement.setAttribute('dir', 'ltr');
      });
    }
  });
});
