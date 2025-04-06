<template>
  <section>
    <h1 class="text-4xl md:text-6xl font-bold text-accent text-center mb-8">Own Projects</h1>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <ProjectCard v-for="project in _projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard.vue";

const _projects = ref(projects);
</script>
