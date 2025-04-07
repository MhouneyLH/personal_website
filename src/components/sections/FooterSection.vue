<template>
  <!-- Because of setting the background color here, the glow effect of the cursor is not visible -->
  <footer class="bg-dark-surface text-gray-400 py-4">
    <div class="flex flex-col items-center justify-center gap-2">
      <p class="text-sm">© {{ new Date().getFullYear() }} Lucas Hünniger. All rights reserved.</p>
      <GetContactLinks :social-links="socialLinks" :email="email" :iconSize="'20px'" class="" />
      <a :href="repositoryLink" target="_blank" class="font-mono underline text-sm">
        <p>Source Code of the Website</p>
      </a>

      <div class="flex space-x-4 mt-2">
        <router-link to="/legal" class="text-light-slate hover:text-dark-accent text-sm"
          >Legal Notice</router-link
        >
        <router-link to="/privacy" class="text-light-slate hover:text-dark-accent text-sm"
          >Privacy Policy</router-link
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
import GetContactLinks from "@/components/GetContactLinks.vue";
import { socialLinks, email, repositoryLink } from "@/data/content";
</script>
