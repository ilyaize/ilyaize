<script setup lang="ts">
const localPath = useLocalePath();
</script>
<template>
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <div class="hero pt-20">
      <section class="max-w-6xl py-20 px-20">
        <div class="text-center max-w-lg">
          <img
            src="../assets/profile.png"
            class="h-60 rounded-full mx-auto mb-8"
            alt="Profile Photo"
          />
          <h1 class="mb-5 text-5xl font-bold">{{ $t("home_title") }}</h1>
          <p class="mb-5">
            {{ $t("home_p1") }}
          </p>
          <p class="mb-5">
            {{ $t("home_p2") }}
          </p>
          <a href="#works" class="btn btn-primary">View My Works</a>
        </div>
        <div class="flex flex-wrap justify-center gap-10"></div>
      </section>
    </div>

    <!-- About Me Section -->
    <section id="about" class="py-36">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2">About Me</h2>
        <p class="mb-4">A little bit more about who I am and what I do.</p>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="max-w-lg">
          <p>
            I am a passionate Web Developer with a knack for creating engaging
            and efficient user experiences. With a focus on modern technologies
            and continuous learning, I aim to bring innovative solutions to the
            digital world. My journey in web development began over 10 years
            ago, driven by a deep interest in how web technologies can transform
            ideas into reality.
          </p>
          <p class="pt-5">
            When I'm not coding, I enjoy playing the guitar, chess, drawing, and
            learning new things, which I believe contributes to my creativity
            and problem-solving skills in my professional work.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-base-200 py-20">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2">My Skills</h2>
        <p class="mb-4">The tools and technologies I excel in.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-10">
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">Frontend Development</h3>
            <p>
              Expertise in HTML, CSS, JavaScript, and frameworks like Vue.js and
              Nuxt. I focus on crafting responsive and accessible user
              interfaces.
            </p>
          </div>
        </div>
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">Backend Development</h3>
            <p>
              Proficient in Node.js and PHP, I develop robust and scalable
              server-side applications. I'm experienced in working with SQL and
              NoSQL databases.
            </p>
          </div>
        </div>
        <!-- Skill Item -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">Project Management</h3>
            <p>
              Skilled in Agile methodologies, I excel in managing projects from
              concept to deployment, ensuring timely delivery and quality
              results.
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
