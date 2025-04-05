<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
    <!-- Left Side -->
    <div class="flex items-center justify-center">
      <div class="w-10/12">
        <AboutSection />
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex items-center justify-center">
      <div class="w-10/12">
        <ExperiencesSection />
      </div>
    </div>
  </div>

  <ProjectsSection />
</template>

<script setup>
import AboutSection from "@/components/sections/AboutSection.vue";
import ExperiencesSection from "@/components/sections/ExperiencesSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
</script>
