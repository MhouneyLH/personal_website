<template>
    <div v-if="text != null" class="flex items-center gap-1">
        <span class="text-dark-accent text-2xl font-bold italic">"</span>
        <p class="text-gray-400 font-mono">{{ text }}</p>
        <span class="text-dark-accent text-2xl font-bold italic">"</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    text?: string;
}>();
</script>