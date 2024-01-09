<template>
  <div class="">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <img
          src="../assets/profile.png"
          class="h-60 rounded-full mx-auto mb-10"
          alt="Profile Photo"
        />
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          {{ $t("home.header") }}
        </h2>
        <p
          style="direction: rtl"
          class="mx-auto mt-6 max-w-xl text-lg leading-8"
        >
          {{ $t("home.p1") }}
        </p>
        <!-- <p class="mx-auto mt-6 max-w-xl text-lg leading-8">
          {{ $t("home.p1") }}
        </p> -->

        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="btn btn-lg btn-primary">{{ $t("home.cta1") }}</a>
          <a href="#" class="text-sm font-semibold leading-6">
            {{ $t("home.cta2") }}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
