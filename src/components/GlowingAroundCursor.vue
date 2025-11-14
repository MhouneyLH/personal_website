<template>
  <div class="relative w-full h-full overflow-hidden" @mousemove="handleMouseMove">
    <!-- Glow circle -->
    <div class="pointer-events-none fixed rounded-full blur-3xl opacity-60 transition-transform duration-200 ease-out"
      :class="tailwindGlowColor" :style="{
        width: `${glowSize}px`,
        height: `${glowSize}px`,
        transform: `translate(${mouseX - glowSize / 2}px, ${mouseY - glowSize / 2}px)`,
      }" />

    <!-- Content -->
    <!-- z-100 = set all content above glow -->
    <div class="relative z-100">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  glowSize: {
    type: Number,
    default: 160,
  },
  tailwindGlowColor: {
    type: String,
    default: "bg-dark-accent",
  },
});

const mouseX = ref(0);
const mouseY = ref(0);

function handleMouseMove(e) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}
</script>
