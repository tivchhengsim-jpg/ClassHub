
import type { Class } from '@/types'

const API_URL = 'http://localhost:3000'

export const classesApi = {
  async getAll(): Promise<Class[]> {
    const response = await fetch(`${API_URL}/classes`)

    if (!response.ok) {
      throw new Error('Failed to load classes')
    }

    return response.json() as Promise<Class[]>
  },

  async getById(id: string): Promise<Class> {
    const response = await fetch(`${API_URL}/classes/${id}`)

    if (!response.ok) {
      throw new Error('Class not found')
    }

    return response.json() as Promise<Class>
  },
}
