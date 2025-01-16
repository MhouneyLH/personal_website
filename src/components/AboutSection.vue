<template>
    <section class="min-h-screen flex flex-col justify-center">
      <h1 class="text-4xl md:text-6xl font-bold text-light-slate mb-4">
        {{ personalInfo.name }}
      </h1>
      <h2 class="text-2xl md:text-4xl font-bold text-slate mb-6">
        {{ personalInfo.title }}
      </h2>
      <p class="text-xl text-slate max-w-2xl">
        {{ personalInfo.description }}
      </p>
      <p class="mt-8 text-lg text-slate max-w-2xl">
        {{ personalInfo.about }}
      </p>
    </section>
  </template>
  
  <script setup>
  import { personalInfo } from '../data/content'
  </script>