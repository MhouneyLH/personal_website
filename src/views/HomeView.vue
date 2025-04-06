<template>
  <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-8 p-11">
    <!-- Left Side -->
    <div class="flex items-center justify-center">
      <AboutSection />
    </div>

    <!-- Right Side -->
    <div class="flex items-center justify-center">
      <ExperiencesSection />
    </div>

    <div class="col-span-1 md:col-span-2 flex items-center justify-center mt-10">
      <ProjectsSection />
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ExperiencesSection from "@/components/sections/ExperiencesSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";

// Global hovered skill state
const hoveredSkill = ref(null);
const setHoveredSkill = (skill) => {
  hoveredSkill.value = skill;
};

provide("hoveredSkill", hoveredSkill);
provide("setHoveredSkill", setHoveredSkill);
</script>
