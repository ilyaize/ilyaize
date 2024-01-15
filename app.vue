<script setup lang="ts">
const localPath = useLocalePath();
useHead({
  title: "Ilya Aizenberg",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>
