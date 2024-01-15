<script setup lang="ts">
const localPath = useLocalePath();
</script>
<template>
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <div class="hero pt-20">
      <section class="max-w-6xl">
        <div class="text-center max-w-lg">
          <img
            src="../assets/profile.png"
            class="h-60 rounded-full mx-auto mb-8 shadow-2xl"
            alt="Profile Photo"
          />
          <h1
            class="mb-5 text-5xl font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-600 bg-clip-text text-transparent"
          >
            {{ $t("home_title") }}
          </h1>
          <p class="mb-5">
            {{ $t("home_p1.1")
            }}<span
              class="font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-600 bg-clip-text text-transparent"
              >{{ $t("home_p1.2") }}</span
            >{{ $t("home_p1.3") }}
          </p>
          <p class="mb-5">
            {{ $t("home_p2") }}
          </p>
          <a href="#works" class="btn btn-primary">{{ $t("home_btn") }}</a>
        </div>
        <div class="flex flex-wrap justify-center gap-10"></div>
      </section>
    </div>

    <!-- About Me Section -->
    <section id="about" class="py-36">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2">
          {{ $t("about_title") }}
        </h2>
        <p class="mb-4">{{ $t("about_tag") }}</p>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="max-w-lg">
          <p>
            {{ $t("about_p1") }}
          </p>
          <p class="pt-5">
            {{ $t("about_p2") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-base-200 py-20">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2">{{ $t("skills_title") }}</h2>
        <p class="mb-12">{{ $t("skills_tag") }}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-10">
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">{{ $t("skills_c1.1") }}</h3>
            <p>
              {{ $t("skills_c1.2") }}
            </p>
          </div>
        </div>
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">{{ $t("skills_c2.1") }}</h3>
            <p>
              {{ $t("skills_c2.2") }}
            </p>
          </div>
        </div>
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">{{ $t("skills_c3.1") }}</h3>
            <p>
              {{ $t("skills_c3.2") }}
            </p>
          </div>
        </div>
        <!-- Add more skill items as needed -->
      </div>
    </section>

    <!-- Testimonials Section (Optional) -->
    <section id="testimonials" class="py-20">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2">Testimonials</h2>
        <p class="mb-4">What people say about my work.</p>
      </div>
      <div class="flex flex-wrap justify-center">
        <!-- Testimonial Item -->
        <div class="max-w-lg">
          <blockquote>
            "Ilya's work on our web project was outstanding. The attention to
            detail and innovative approach were exactly what we needed."
          </blockquote>
          <cite>– Michael Amar, Bnei Adam</cite>
        </div>
      </div>
    </section>

    <!-- Contact Call-to-Action (Optional) -->
    <section id="contact-cta" class="py-20">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2">Let's Work Together</h2>
        <p class="mb-4">
          Interested in collaborating or learning more about my services?
        </p>
        <a href="#contact" class="btn btn-primary">Contact Me</a>
      </div>
    </section>

    <!-- Optional: Additional Content Sections -->
    <!-- ... -->
  </div>
  <div class="py-10 flex justify-center">
    <div class="max-w-2xl">
      <h1 class="text-5xl font-bold"></h1>

      <p class="py-6">
        {{ $t("home_p1") }}
      </p>

      <button class="btn btn-primary">{{ $t("home_btn") }}</button>
    </div>
  </div>
</template>
