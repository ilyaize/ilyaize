<template>
  <header>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="flex-1 py-5">
        <NuxtLink class="flex" :to="localPath('/')">
          <img src="../assets/logo.svg" class="h-12 rounded-full shadow-lg" />
        </NuxtLink>
      </div>
      <div class="hidden md:flex">
        <ul class="menu-horizontal p-0">
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

          <LangSwitcher />

          <ThemeSwitcher />
        </ul>
        <div @click="toggleNav" class="flex md:hidden"></div>
      </div>
      <!-- hamburger menu -->
      <div class="flex md:hidden">
        <div id="nav-icon3" @click="toggleNav" :class="{ open: isMenuVisible }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <!-- hidden navlinks -->
    <div v-show="isMenuVisible" class="flex justify-center md:hidden">
      <div class="menu-vertical space-y-3 pt-4">
        <NuxtLink :to="localPath('/')" class="btn btn-link no-underline">
          {{ $t('nav_home') }}
        </NuxtLink>
        <NuxtLink :to="localPath('/#about')" class="btn btn-link no-underline">
          {{ $t('nav_about') }}
        </NuxtLink>
        <NuxtLink :to="localPath('/#work')" class="btn btn-link no-underline">
          {{ $t('nav_work') }}
        </NuxtLink>
        <li class="btn btn-link no-underline">
          <a href="#more">{{ $t('nav_contact') }}</a>
        </li>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup>
const localPath = useLocalePath();

const isMenuVisible = ref(false);

const toggleNav = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style lang="scss" scoped>
#nav-icon3 {
  width: 60px;
  height: 45px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon3 span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #6366f1;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 18px;
}

#nav-icon3 span:nth-child(4) {
  top: 36px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>
