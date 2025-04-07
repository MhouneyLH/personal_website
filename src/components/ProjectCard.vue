<template>
  <div class="w-full max-w-[800px]">
    <Card class="bg-dark-surface shadow-lg font-mono">
      <template #title>
        <p class="text-lg font-bold text-dark-accent">{{ project.title }}</p>
      </template>

      <template #subtitle>
        <div v-if="project.link">
          <a :href="project.link" target="_blank" class="hover:underline text-sm text-gray-400">
            <p class="truncate">{{ project.link }}</p>
          </a>
        </div>
      </template>

      <template #content>
        <!-- Render description with markdown-like links -->
        <p class="mt-2 text-white text-justify" v-html="parsedDescription"></p>

        <!-- skills -->
        <div class="mt-2 flex flex-wrap gap-2 text-dark-accent">
          <SkillBadge v-for="skill in project.skills" :key="skill" :name="skill" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from "primevue/card";
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
