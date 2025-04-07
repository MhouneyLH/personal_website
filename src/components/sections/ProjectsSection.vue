<template>
  <section>
    <h1 class="text-4xl md:text-6xl font-bold text-center mb-8">Own Projects</h1>

    <Timeline :value="projects" align="alternate" class="relative">
      <template #content="slotProps">
        <ProjectCard :project="slotProps.item" class="relativ my-10" />
      </template>

      <template #opposite="slotProps">
        <div
          class="flex items-center"
          :class="{
            'justify-end': slotProps.index % 2 === 0,
            'justify-start': slotProps.index % 2 !== 0,
          }"
        >
          <p class="text-dark-text">{{ slotProps.item.startDate }}</p>
        </div>
      </template>
    </Timeline>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard.vue";

const _projects = ref(projects);
</script>
