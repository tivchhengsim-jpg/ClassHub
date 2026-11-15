
<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useClassesStore } from '@/stores/classes'

const classesStore = useClassesStore()

const { classes, status, error } = storeToRefs(classesStore)

onMounted(() => {
  classesStore.fetchAll()
})
</script>

<template>
  <main>
    <h1>Explore Classes</h1>

    <p v-if="status === 'loading'">Loading classes...</p>

    <div v-else-if="status === 'error'">
      <p>{{ error }}</p>
      <button @click="classesStore.fetchAll()">Try Again</button>
    </div>

    <p v-else-if="status === 'success' && classes.length === 0">
      No classes available.
    </p>

    <div v-else-if="status === 'success'">
      <div v-for="item in classes" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p>Category: {{ item.category }}</p>
        <p>Price: ${{ item.price }} / {{ item.priceUnit }}</p>
        <p>Mode: {{ item.mode }}</p>
        <hr />
      </div>
    </div>
  </main>
</template>
