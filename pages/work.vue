<script setup lang="ts">
const localPath = useLocalePath();
</script>
<template>
  <div class="py-10 flex justify-center">
    <div class="max-w-2xl">
      <h1 class="text-5xl font-bold">{{ $t("work_title") }}</h1>

      <p class="py-6">
        {{ $t("work_p1") }}
      </p>

      <button class="btn btn-primary">{{ $t("work_btn") }}</button>
    </div>
  </div>
</template>
