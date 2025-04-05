<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ company }}</p>
    <p>{{ startDate }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
