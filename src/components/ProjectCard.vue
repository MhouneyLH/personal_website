<template>
  <div class="bg-zinc-900 text-green-400 font-mono border rounded-lg shadow-lg p-4">
    <p class="font-bold text-lg">{{ project.title }}</p>
    <p class="text-sm text-gray-400">{{ project.link }}</p>
    <p class="text-sm text-gray-500">{{ project.date }}</p>

    <!-- Render description with markdown-like links -->
    <p class="mt-2 text-white" v-html="parsedDescription"></p>

    <!-- Display skills as badges -->
    <div class="mt-2 flex flex-wrap gap-2">
      <SkillBadge v-for="skill in project.skills" :name="skill" />
    </div>
  </div>
</template>

<script setup>
import SkillBadge from "./SkillBadge.vue";
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
