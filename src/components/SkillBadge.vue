<template>
  <span
    class="text-sm cursor-pointer inline-block leading-tight"
    :class="hoveredSkill === name ? 'bg-dark-accent-variant text-white font-bold ' : color"
    @mouseover="setHoveredSkill(name)"
  >
    [{{ name }}]
  </span>
</template>

<script setup>
import { inject } from "vue";

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

const hoveredSkill = inject("hoveredSkill");
const setHoveredSkill = inject("setHoveredSkill");
</script>
