<template>
  <section>
    <h1 class="text-4xl md:text-6xl font-bold text-center mb-8">Own Projects</h1>

    <v-timeline :line-color="tailwindColors['dark-accent']" class="mx-auto">
      <v-timeline-item
        v-for="project in _projects"
        :key="project.title"
        dot-color="'bg-dark-accent'"
        :size="24"
      >
        <template v-slot:opposite>
          <p class="font-bold text-lg">
            {{ project.startDate }}
          </p>
        </template>

        <ProjectCard :project="project" />
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard.vue";

const _projects = ref(projects);

const tailwindColors = ref({});

const getTailwindColor = (variable) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

onMounted(() => {
  tailwindColors.value = {
    "dark-accent": getTailwindColor("--tw-color-dark-accent"),
    "dark-secondary": getTailwindColor("--tw-color-dark-secondary"),
  };
});
</script>
