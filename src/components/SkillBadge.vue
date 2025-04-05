<template>
  <span class="px-3 py-1 text-sm text-accent bg-accent/10 rounded-full">
    {{ name }}
  </span>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
