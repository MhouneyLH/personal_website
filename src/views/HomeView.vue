<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen gap-8">
    <!-- Left Side -->
    <div class="flex items-center justify-center w-11/12">
      <AboutSection />
    </div>

    <!-- Right Side -->
    <div class="flex items-center justify-center w-11/12">
      <ExperiencesSection />
    </div>
  </div>

  <ProjectsSection />
</template>

<script setup>
import AboutSection from "@/components/sections/AboutSection.vue";
import ExperiencesSection from "@/components/sections/ExperiencesSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
</script>
