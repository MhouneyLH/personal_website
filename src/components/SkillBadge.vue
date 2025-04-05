<template>
  <span class="py-1 text-sm text-accent rounded-full {{ color }}"> [{{ name }}] </span>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "bg-accent/10",
  },
});
</script>
