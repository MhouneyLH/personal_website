<template>
  <div class="relative">
    <!-- Glowing Effect in the Background -->
    <GlowingAroundCursor :glow-size="140" tailwind-glow-color="bg-dark-accent">
      <template #content>
        <div class="relative flex flex-col min-h-screen">
          <!-- Main Content -->
          <div class="flex-grow">
            <router-view />
          </div>

          <!-- Footer -->
          <FooterSection />
        </div>
      </template>
    </GlowingAroundCursor>
  </div>
</template>

<script setup>
import GlowingAroundCursor from "./components/GlowingAroundCursor.vue";
import FooterSection from "./components/sections/FooterSection.vue";
</script>
