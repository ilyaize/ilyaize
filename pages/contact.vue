<script setup lang="ts">
const localPath = useLocalePath();
</script>
<template>
  <div class="py-10">
    <div class="max-w-2xl">
      <h1 class="text-5xl font-bold">{{ $t('contact_title') }}</h1>

      <p class="py-6">
        {{ $t('contact_p1') }}
      </p>

      <button class="btn btn-primary">{{ $t('contact_btn') }}</button>
    </div>
  </div>
</template>
