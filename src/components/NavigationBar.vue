<template>
    <nav class="sticky">
        <div class="w-full px-6 py-4">
            <div class="flex gap-6 justify-end">
                <router-link to="/" class="text-light-slate hover:text-dark-accent transition-colors text-xl"
                    :class="{ 'text-dark-accent font-bold': route.path === '/' }">
                    Home
                </router-link>
                <router-link to="/blog" class="text-light-slate hover:text-dark-accent transition-colors text-xl"
                    :class="{
                        'text-dark-accent font-bold': route.path === '/blog'
                    }">
                    Blog
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>