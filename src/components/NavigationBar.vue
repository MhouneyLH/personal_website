<template>
    <nav class="sticky">
        <div class="w-1/2 mx-auto px-6 py-4">
            <div class="flex justify-between">
                <Quote :text="currentQuote" />
                <div class="flex gap-6">
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
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Quote from './Quote.vue';

const route = useRoute();

const routeQuotes: Record<string, string> = {
    '/': 'Some war crimes I\'ve committed so far.',
    '/blog': 'My opinionated opinions.',
    '/privacy': 'Your data is safe... probably.',
    '/legal': 'The boring but necessary stuff.',
};

const currentQuote = computed(() => {
    return routeQuotes[route.path] || null;
});
</script>