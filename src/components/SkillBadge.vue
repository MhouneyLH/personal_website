<template>
  <span
    class="text-sm text-accent cursor-pointer inline-block leading-tight"
    :class="hoveredSkill === name ? 'bg-green-500 text-white font-bold ' : color"
    @mouseover="setHoveredSkill(name)"
    @mouseleave="setHoveredSkill(null)"
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
