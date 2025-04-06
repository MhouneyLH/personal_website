<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main Content -->
    <div class="flex-grow">
      <router-view />
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import FooterSection from "./components/sections/FooterSection.vue";
</script>
