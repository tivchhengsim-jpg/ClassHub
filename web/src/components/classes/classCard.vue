
<script setup lang="ts">
import type { Class } from '@/types'

defineProps<{
  classItem: Class
}>()
</script>

<template>
  <article class="class-card">
    <div class="class-image">
      <img
        v-if="classItem.image"
        :src="classItem.image"
        :alt="classItem.title"
      />
      <span v-else>Class Image</span>
    </div>

    <div class="class-info">
      <span class="category">{{ classItem.category }}</span>

      <h3>{{ classItem.title }}</h3>

      <p class="mode">
        {{ classItem.mode === 'online' ? 'Online' : 'In-person' }}
      </p>

      <div class="card-footer">
        <strong>${{ classItem.price }} / {{ classItem.priceUnit }}</strong>

        <RouterLink :to="`/classes/${classItem.id}`">
          View Details
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<style scoped>
.class-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: white;
}

.class-image {
  height: 160px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
}

.class-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.class-info {
  padding: 16px;
}

.category {
  color: #2563eb;
  font-size: 13px;
}

.class-info h3 {
  margin: 8px 0;
  font-size: 18px;
}

.mode {
  color: #6b7280;
  font-size: 14px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
}

.card-footer a {
  color: #2563eb;
  text-decoration: none;
  font-size: 14px;
}
</style>
