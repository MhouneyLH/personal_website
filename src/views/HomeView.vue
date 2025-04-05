<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
    <!-- Left Side -->
    <div class="bg-gray-600 flex items-center justify-center">
      <AboutSection />
    </div>

    <!-- Right Side -->
    <div class="flex items-center justify-center">
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
