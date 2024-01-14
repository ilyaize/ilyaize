<script setup lang="ts">
const localPath = useLocalePath();
</script>
<template>
  <div class="py-10 flex justify-center">
    <div class="max-w-2xl">
      <img
        src="../assets/profile.png"
        class="h-60 rounded-full mx-auto mb-8"
        alt="Profile Photo"
      />
      <h1 class="text-5xl font-bold">{{ $t("home_title") }}</h1>

      <p class="py-6">
        {{ $t("home_p1") }}
      </p>

      <button class="btn btn-primary">{{ $t("home_btn") }}</button>
    </div>
  </div>
</template>
