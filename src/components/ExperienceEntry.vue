<!-- ExperienceEntry.vue -->
<template>
  <div class="flex flex-row items-start space-x-2">
    <p>></p>
    <div class="flex flex-col text-white">
      <div class="flex flex-row items-center space-x-2">
        <p>[{{ experience.title }}]</p>
        <p class="text-sm">
          @
          <strong
            ><a :href="experience.link" target="_blank" class="text-accent hover:underline">
              {{ experience.company }}
            </a></strong
          >
        </p>
      </div>
      <p class="text-sm text-gray-500">{{ experience.startDate }} - {{ experience.endDate }}</p>
      <div class="text-gray-400 text-sm">
        <p>{{ experience.description }}</p>
        <p>
          <span v-for="skill in experience.skills">
            <SkillBadge :name="skill" color="" />
            <span v-if="!$last">&nbsp;</span>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SkillBadge from "./SkillBadge.vue";

// Props for experience
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* You can add some scoped styles if necessary */
</style>
