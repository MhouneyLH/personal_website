<template>
  <section class="min-h-screen flex flex-col justify-center space-y-6">
    <TerminalWindow :experiences="_experiences" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { experiences } from "@/data/content.js";
import TerminalWindow from "../TerminalWindow.vue";

const _experiences = ref(experiences);
</script>
