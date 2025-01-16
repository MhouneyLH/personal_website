<template>
    <section class="space-y-12">
      <div v-for="exp in experiences" :key="exp.period" 
           class="group relative border border-slate/20 rounded-lg p-6 hover:border-accent transition-colors">
        <a :href="exp.link" target="_blank" class="absolute inset-0"></a>
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold text-light-slate group-hover:text-accent">
              {{ exp.title }}
            </h3>
            <p class="text-slate">{{ exp.company }}</p>
          </div>
          <span class="text-sm text-slate">{{ exp.period }}</span>
        </div>
        <p class="text-slate mb-4">{{ exp.description }}</p>
        <div class="flex flex-wrap gap-2">
          <TechBadge v-for="tech in exp.technologies" :key="tech" :name="tech" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { experiences } from '../data/content'
  import TechBadge from './TechBadge.vue'
  </script>