<template>
  <!-- Title -->
  <section class="min-h-screen flex flex-col justify-start">
    <div class="flex items-center">
      <!-- Big ">" Symbol -->
      <span class="text-6xl md:text-8xl font-bold text-accent leading-none mr-4">&gt;</span>
      <h1 class="text-4xl md:text-5xl font-bold text-light-slate">Hey, I'm Lucas!</h1>
    </div>

    <h2 class="text-2xl md:text-2xl font-bold text-slate mb-6">
      Software Engineer | Co-Founder EduSim Engineering
    </h2>

    <p class="text-xl text-slate max-w-2xl mb-6">
      I'm Lucas from Thuringia, Germany, and I'm currently studying for my master's degree in
      Software Engineering in Hagenberg, Upper Austria. I'm a passionate Software Engineer who loves
      learning new things, solving problems, and taking on new challenges. I'm looking forward to
      working on interesting projects. My current focus is on Software Architecture, Backend
      development and DevOps, but I'm also interested in mobile development and Network Engineering
      / System Administration. I'm always open to Open Source contributions and new projects!
    </p>

    <!-- Social Media Links -->
    <div class="flex space-x-3">
      <a
        v-for="link in _socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-light-slate hover:text-accent"
      >
        <!-- could not use tailwind for this :(-->
        <i :class="`pi pi-${link.icon}`" style="font-size: 30px"></i>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { socialLinks } from "@/data/content";

const _socialLinks = ref(socialLinks);
</script>
