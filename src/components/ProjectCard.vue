<template>
  <v-card class="bg-dark-surface font-mono" outlined>
    <v-card-title class="text-lg font-bold text-dark-accent">{{ project.title }}</v-card-title>

    <div v-if="project.link">
      <v-card-subtitle>
        <a :href="project.link" target="_blank" class="hover:underline text-sm text-gray-400">
          <p class="truncate">{{ project.link }}</p>
        </a>
      </v-card-subtitle>
    </div>

    <v-card-text>
      <p class="text-sm text-gray-500">{{ project.date }}</p>

      <!-- Render description with markdown-like links -->
      <p class="mt-2 text-white text-justify" v-html="parsedDescription"></p>

      <!-- skills -->
      <div class="mt-2 flex flex-wrap gap-2 text-dark-accent">
        <SkillBadge v-for="skill in project.skills" :key="skill" :name="skill" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import SkillBadge from "@/components/SkillBadge.vue";
import { parseMarkdownLinksFromString } from "@/utils.js";
import { computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const parsedDescription = computed(() => parseMarkdownLinksFromString(props.project.description));
</script>
