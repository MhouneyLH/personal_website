<template>
  <div class="bg-zinc-900 text-green-400 font-mono border rounded-lg shadow-lg p-4">
    <p class="font-bold text-lg">{{ project.title }}</p>
    <a
      :href="project.link"
      target="_blank"
      class="text-accent hover:underline text-sm text-gray-400"
    >
      <p class="truncate">{{ project.link }}</p>
    </a>
    <p class="text-sm text-gray-500">{{ project.date }}</p>

    <!-- Render description with markdown-like links -->
    <p class="mt-2 text-white" v-html="parsedDescription"></p>

    <!-- skills -->
    <div class="mt-2 flex flex-wrap gap-2">
      <SkillBadge v-for="skill in project.skills" :name="skill" />
    </div>
  </div>
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
