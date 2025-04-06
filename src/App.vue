<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main Content -->
    <div class="flex-grow">
      <router-view />
    </div>

    <!-- Footer -->
    <footer class="bg-zinc-900 text-gray-400 py-4">
      <div class="flex flex-col items-center justify-center gap-2">
        <p class="text-sm">© {{ new Date().getFullYear() }} Lucas Hünniger. All rights reserved.</p>
        <GetContactLinks :social-links="socialLinks" :email="email" :iconSize="'20px'" class="" />
      </div>
    </footer>
  </div>
</template>

<script setup>
import GetContactLinks from "./components/GetContactLinks.vue";
import { socialLinks, email } from "@/data/content";
</script>
