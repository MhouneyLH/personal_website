<template>
  <div class="flex space-x-3">
    <!-- Social Media Icons -->
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-light-slate hover:text-accent"
    >
      <i :class="`pi pi-${link.icon}`" :style="{ fontSize: iconSize }"></i>
    </a>

    <!-- Email Icon -->
    <a class="text-light-slate hover:text-accent cursor-pointer" :href="`mailto:${email}`">
      <i class="pi pi-envelope" :style="{ fontSize: iconSize }"></i>
    </a>
  </div>
</template>

<script setup>
// Props for social links and email
const props = defineProps({
  socialLinks: {
    type: Array,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  iconSize: {
    type: String,
    default: "30px",
  },
});
</script>
