<template>
  <Card class="bg-zinc-900 text-green-400 font-mono border rounded-lg shadow-lg">
    <template #content>
      <!-- Terminal body -->
      <div class="space-y-2">
        <div v-for="(line, index) in predefinedLines" :key="index">
          <!-- Show the command and path -->
          <div v-if="line.output !== undefined">
            <div class="flex flex-col space-y-2">
              <div>
                <span class="text-green-400">lucas@dev:{{ line.path }} $</span>
                <span class="ml-3">{{ line.command }}</span>
              </div>
              <span class="text-white">{{ line.output }}</span>
            </div>
          </div>

          <!-- Show only the command and path if output is undefined or empty -->
          <div v-else>
            <span class="text-green-400">lucas@dev:{{ line.path }} $</span>
            <span class="ml-3">{{ line.command }}</span>
          </div>
        </div>

        <!-- list all the experiences after last command -->
        <div v-for="(experience, index) in experiences" :key="index">
          <div class="flex flex-col space-y-2 mt-2">
            <div class="text-white">
              <div class="flex flex-row items-center space-x-2">
                <p>[{{ experience.title }}]</p>
                <p class="text-sm text-gray-500">
                  {{ experience.startDate }} - {{ experience.endDate }}
                </p>
              </div>
              <div class="ml-4">
                <p class="text-sm">{{ experience.description }}</p>
                <p class="text-sm text-gray-400">
                  <span
                    v-for="(tag, tagIndex) in experience.skills"
                    :key="tagIndex"
                    class="bg-accent/20 py-1 rounded-full text-xs"
                  >
                    <SkillBadge :name="tag" color="bg-accent/10" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Simulated current input line with blinking cursor -->
        <div class="flex items-center">
          <span class="text-green-400">lucas@dev:{{ lastLine.path }} $</span>
          <span id="blinking-cursor" class="ml-3 text-white">█</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "primevue/card";
import { defineProps } from "vue";
import SkillBadge from "./SkillBadge.vue";

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
