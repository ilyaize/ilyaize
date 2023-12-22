<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <AppHeader msg="ilyaize" />
  <router-view></router-view>
  <AppFooter />
</template>

<style scoped></style>
