<template>
  <Card class="font-mono shadow-lg bg-dark-background">
    <template #content>
      <!-- Terminal body -->
      <div class="space-y-2">
        <div v-for="(line, index) in predefinedLines" :key="index">
          <!-- Show the command and path -->
          <div v-if="line.output !== undefined">
            <div class="flex flex-col space-y-2">
              <div>
                <span class="text-dark-accent">lucas@dev:{{ line.path }} $</span>
                <span class="ml-3">{{ line.command }}</span>
              </div>
              <span class="text-dark-text">{{ line.output }}</span>
            </div>
          </div>

          <!-- Show only the command and path if output is undefined or empty -->
          <div v-else>
            <span class="text-dark-accent">lucas@dev:{{ line.path }} $</span>
            <span class="ml-3">{{ line.command }}</span>
          </div>
        </div>

        <!-- list all the experiences after last command -->
        <div v-for="e in experiences">
          <ExperienceEntry :experience="e" />
          <div class="mt-3"></div>
        </div>

        <!-- Simulated current input line with blinking cursor -->
        <div class="flex items-center">
          <span class="text-dark-accent">lucas@dev:{{ lastLine.path }} $</span>
          <span id="blinking-cursor" class="ml-3 text-white">█</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "primevue/card";
import ExperienceEntry from "@/components/ExperienceEntry.vue";

// Updated predefinedLines to match your JSON structure
const predefinedLines = [
  {
    command: "whoami",
    path: "~",
    output: "lucas",
  },
  {
    command: "ls",
    path: "~",
    output: "projects work_experience nature volleyball.sh",
  },
  {
    command: "cd ./work/",
    path: "~",
    output: "",
  },
  {
    command: "sudo tail -f work_experience.log",
    path: "~/work",
    output: undefined,
  },
];

const lastLine = predefinedLines[predefinedLines.length - 1];

const props = defineProps({
  experiences: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
#blinking-cursor {
  animation: blink 2s steps(2, start) infinite;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>
