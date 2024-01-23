<script setup lang="ts">
const localPath = useLocalePath();
</script>
<template>
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <div class="hero pt-20">
      <section class="max-w-6xl">
        <div class="max-w-lg text-center">
          <img src="../assets/profile.png" class="mx-auto mb-8 h-60 rounded-full shadow-2xl" alt="Profile Photo" />
          <h1 class="mb-5 bg-gradient-to-r from-indigo-400 to-fuchsia-600 bg-clip-text text-5xl font-bold text-transparent">
            {{ $t('home_title') }}
          </h1>
          <p class="mb-5">
            {{ $t('home_p1.1') }}
            <!-- KEEP THIS ONE LINE -->
            <span class="bg-gradient-to-r from-indigo-400 to-fuchsia-600 bg-clip-text font-bold text-transparent">{{ $t('home_p1.2') }}</span>{{ $t('home_p1.3') }}
          </p>
          <p class="mb-5">
            {{ $t('home_p2') }}
          </p>
          <NuxtLink :to="localPath('/work')" class="btn btn-lg btn-wide bg-gradient-to-r from-indigo-400 to-fuchsia-600 text-xl font-bold text-white">{{ $t('home_btn') }}</NuxtLink>
        </div>
        <div class="flex flex-wrap justify-center gap-10"></div>
      </section>
    </div>

    <!-- About Me Section -->
    <section id="about" class="py-36">
      <div class="text-center">
        <h2 class="mb-2 text-4xl font-bold">
          {{ $t('about_title') }}
        </h2>
        <p class="relative mb-4 px-3 py-1 text-sm leading-6 text-secondary">
          {{ $t('about_tag') }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="max-w-lg">
          <p>
            {{ $t('about_p1') }}
          </p>
          <p class="pt-5">
            {{ $t('about_p2') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 md:rounded-3xl md:bg-base-200">
      <div class="text-center">
        <h2 class="mb-2 text-4xl font-bold">{{ $t('skills_title') }}</h2>
        <p class="relative mb-12 px-3 py-1 text-sm leading-6 text-secondary">
          {{ $t('skills_tag') }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-10">
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <i class="fa-solid fa-code fa-2xl mx-auto p-8"></i>
            <h3 class="card-title">{{ $t('skills_c1.1') }}</h3>
            <p>
              {{ $t('skills_c1.2') }}
            </p>
          </div>
        </div>
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <i class="fa-solid fa-pen-nib fa-2xl mx-auto p-8"></i>
            <h3 class="card-title">{{ $t('skills_c2.1') }}</h3>
            <p>
              {{ $t('skills_c2.2') }}
            </p>
          </div>
        </div>
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <i class="fa-solid fa-microchip fa-2xl mx-auto p-8"></i>
            <h3 class="card-title">{{ $t('skills_c3.1') }}</h3>
            <p>
              {{ $t('skills_c3.2') }}
            </p>
          </div>
        </div>
        <!-- Add more skill items as needed -->
      </div>
    </section>

    <!-- Testimonials Section (Optional) -->
    <section id="testimonials" class="py-20">
      <div class="text-center">
        <h2 class="mb-2 text-4xl font-bold">{{ $t('testimonials_title') }}</h2>
        <p class="mb-4 text-sm leading-6 text-secondary">
          {{ $t('testimonials_tag') }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center">
        <!-- Testimonial Item -->
        <div class="max-w-lg">
          <blockquote>
            {{ $t('testimonials_p1') }}
          </blockquote>
          <cite>{{ $t('testimonials_p2') }}</cite>
        </div>
      </div>
    </section>

    <!-- Contact Call-to-Action (Optional) -->
    <section id="contact-cta" class="py-20">
      <div class="text-center">
        <h2 class="mb-2 text-4xl font-bold">{{ $t('cta_title') }}</h2>
        <p class="mb-4 text-sm leading-6 text-secondary">
          {{ $t('cta_tag') }}
        </p>
        <NuxtLink :to="localPath('/contact')" class="btn btn-lg btn-wide bg-gradient-to-r from-indigo-400 to-fuchsia-600 text-xl font-bold text-white">{{ $t('nav_contact') }}</NuxtLink>
      </div>
    </section>
  </div>
</template>
