
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { classesApi } from '@/api/classes'
import type { Class } from '@/types'

export const useClassesStore = defineStore('classes', () => {
// state
  const classes = ref<Class[]>([])
  const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
  const error = ref<string | null>(null)

// getter
  const totalClasses = computed(() => classes.value.length)

  const getById = computed(() => {
    return (id: string) =>
      classes.value.find((item) => item.id === id)
  })

  // sction
  async function fetchAll() {
    status.value = 'loading'
    error.value = null

    try {
      classes.value = await classesApi.getAll()
      status.value = 'success'
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Failed to load classes'
      status.value = 'error'
    }
  }

  return {
    classes,
    status,
    error,
    totalClasses,
    getById,
    fetchAll,
  }
})
