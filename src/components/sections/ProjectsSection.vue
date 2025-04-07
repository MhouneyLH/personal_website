<template>
  <section>
    <h1 class="text-4xl md:text-6xl font-bold text-center mb-8">Own Projects</h1>

    <v-timeline :line-color="'surface-variant'" :align="'center'" :justify="'center'">
      <v-timeline-item
        v-for="project in _projects"
        :key="project.title"
        :dot-color="'accent'"
        :density="'comfortable'"
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
import { ref } from "vue";
import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard.vue";

const _projects = ref(projects);
</script>
