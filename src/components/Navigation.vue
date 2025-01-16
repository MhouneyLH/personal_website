<template>
    <nav class="fixed top-0 left-0 w-full bg-navy/80 backdrop-blur-sm z-50 py-4">
      <div class="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-light-slate">{{ personalInfo.name }}</h1>
        <div class="flex gap-6">
          <a v-for="link in socialLinks" 
             :key="link.name" 
             :href="link.url" 
             target="_blank"
             class="text-slate hover:text-accent transition-colors">
            {{ link.name }}
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { personalInfo, socialLinks } from '../data/content'
  </script>