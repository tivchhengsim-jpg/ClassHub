

<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <h1>Class Detail</h1>
  <p>Class ID: {{ id }}</p>
</template>