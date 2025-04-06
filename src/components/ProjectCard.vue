<template>
  <div class="bg-zinc-900 text-green-400 font-mono border rounded-lg shadow-lg p-4">
    <p class="font-bold text-lg">{{ project.title }}</p>
    <p class="text-sm text-gray-400">{{ project.link }}</p>
    <p class="text-sm text-gray-500">{{ project.date }}</p>
    <p class="mt-2 text-white">{{ project.description }}</p>

    <!-- Display skills as badges -->
    <div class="mt-2 flex flex-wrap gap-2">
      <span
        v-for="skill in project.skills"
        :key="skill"
        class="py-1 text-sm text-accent cursor-pointer m-0 rounded-none inline-block leading-none bg-accent/10"
      >
        [{{ skill }}]
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
