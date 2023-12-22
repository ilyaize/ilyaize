<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <section class="">
    <RouterView />
  </section>
  <footer class="">Footer</footer>
</template>

<style scoped></style>
