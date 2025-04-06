<template>
  <span
    class="py-1 text-sm text-accent cursor-pointer m-0 rounded-none inline-block"
    :class="hoveredSkill === name ? 'bg-green-500 text-white font-bold ' : color"
    @mouseover="setHoveredSkill(name)"
    @mouseleave="setHoveredSkill(null)"
  >
    [{{ name }}]
  </span>
</template>

<script setup>
import { defineProps, inject } from "vue";

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
