<script setup lang="ts">
const { locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

const toggleLanguage = () => {
  language.value = language.value === "en" ? "he" : "en";
};
</script>

<template>
  <li class="btn btn-link no-underline" @click="toggleLanguage">
    {{ locale === "he" ? "English" : "עברית" }}
  </li>
</template>
