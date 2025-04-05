<template>
  <section class="min-h-screen flex flex-col justify-center space-y-6">
    <ExperienceEntry
      v-for="experience in experiences"
      :key="experience.id"
      :title="experience.title"
      :company="experience.company"
      :startDate="experience.startDate"
      :endDate="experience.endDate"
      :description="experience.description"
      :skills="experience.skills"
      :link="experience.link"
    />
  </section>
</template>

<script>
import ExperienceEntry from "@/components/ExperienceEntry.vue";
import { experiences } from "@/data/content.js";

export default {
  name: "ExperiencesSection",
  components: {
    ExperienceEntry,
  },
  data() {
    return {
      experiences: experiences,
    };
  },
};
</script>
