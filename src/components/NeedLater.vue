<template>
  <div class="bg-zinc-900 text-green-400 font-mono border rounded-lg shadow-lg p-4">
    <p class="font-bold text-lg">{{ title }}</p>
    <p class="text-sm text-gray-400">{{ company }}</p>
    <p class="text-sm text-gray-500">{{ startDate }} - {{ endDate }}</p>
    <p class="mt-2 text-white">{{ description }}</p>

    <!-- Display skills as badges -->
    <div class="mt-2 flex flex-wrap gap-2">
      <SkillBadge
        v-for="(skill, index) in skills"
        :key="index"
        :name="skill"
        color="bg-accent/10"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import SkillBadge from "./SkillBadge.vue"; // Assuming SkillBadge is imported

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
