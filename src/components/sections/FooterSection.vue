<template>
  <footer class="bg-zinc-900 text-gray-400 py-4">
    <div class="flex flex-col items-center justify-center gap-2">
      <p class="text-sm">© {{ new Date().getFullYear() }} Lucas Hünniger. All rights reserved.</p>
      <GetContactLinks :social-links="socialLinks" :email="email" :iconSize="'20px'" class="" />
      <a :href="repositoryLink" target="_blank" class="text-accent font-mono underline text-sm">
        <p>Source Code of the Website</p>
      </a>
    </div>
  </footer>
</template>

<script setup>
import GetContactLinks from "@/components/GetContactLinks.vue";
import { socialLinks, email, repositoryLink } from "@/data/content";
</script>
