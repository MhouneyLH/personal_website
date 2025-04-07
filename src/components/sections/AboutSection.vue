<template>
  <!-- Title -->
  <section>
    <div class="flex items-center">
      <!-- Big ">" Symbol -->
      <span class="text-6xl md:text-8xl font-bold text-dark-accent leading-none mr-4">&gt;</span>
      <h1 class="text-4xl md:text-5xl font-bold text-light-slate">Hey, I'm Lucas!</h1>
    </div>

    <h2 class="text-2xl md:text-2xl font-bold text-slate mb-6">Software Engineer | Co-Founder</h2>

    <p class="text-xl text-slate max-w-2xl mb-6 text-justify">
      I'm Lucas from Thuringia, Germany, and I'm currently studying for my master's degree in
      Software Engineering in Hagenberg, Upper Austria. I'm a passionate Software Engineer who loves
      learning new things, solving problems, and taking on new challenges. I'm looking forward to
      working on interesting projects. My current focus is on Software Architecture, Backend
      development and DevOps, but I'm also interested in mobile development and Network Engineering
      / System Administration. I'm always open to Open Source contributions and new projects!
    </p>

    <!-- Social Media Links, Email etc. -->
    <GetContactLinks :socialLinks="socialLinks" :email="email" />

    <!-- Buy Me a Coffee Banner -->
    <div class="mt-3">
      <a
        href="https://www.buymeacoffee.com/mhouneylh"
        target="_blank"
        rel="noopener noreferrer"
        class="text-light-slate cursor-pointer inline-block"
      >
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=mhouneylh&button_colour=4ade80&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
          alt="Buy Me a Coffee"
        />
      </a>
    </div>
  </section>
</template>

<script setup>
import { socialLinks, email } from "@/data/content";
import GetContactLinks from "../GetContactLinks.vue";
</script>
