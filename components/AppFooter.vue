<template>
  <footer>
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <li class="btn btn-link no-underline">
          <NuxtLink :to="localPath('/')">{{ $t('nav_home') }}</NuxtLink>
        </li>

        <li class="btn btn-link no-underline">
          <NuxtLink :to="localPath('/#about')">{{ $t('nav_about') }}</NuxtLink>
        </li>

        <li class="btn btn-link no-underline">
          <NuxtLink :to="localPath('/work')">{{ $t('nav_work') }}</NuxtLink>
        </li>

        <li class="btn btn-link no-underline">
          <NuxtLink :to="localPath('/contact')">{{ $t('nav_contact') }}</NuxtLink>
        </li>
      </nav>
      <div class="mt-10 flex justify-center">
        <a href="https://www.facebook.com/ilyaizen/" class="px-5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">Facebook</span>
          <i class="fa-brands fa-facebook fa-lg"></i>
        </a>

        <a href="https://twitter.com/ilyaize" class="px-5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">X-Twitter</span>
          <i class="fa-brands fa-x-twitter fa-lg"></i>
        </a>
        <a href="https://github.com/ilyaize" class="px-5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">GitHub</span>
          <i class="fa-brands fa-github fa-lg"></i>
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; {{ $t('footer_txt') }}</p>
    </div>
  </footer>
</template>
<script setup lang="ts">
const localPath = useLocalePath();
</script>
