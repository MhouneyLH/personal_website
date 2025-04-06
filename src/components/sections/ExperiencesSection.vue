<template>
  <section>
    <TerminalWindow :experiences="_experiences" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { experiences } from "@/data/content.js";
import TerminalWindow from "@/components/TerminalWindow.vue";

const _experiences = ref(experiences);
</script>
