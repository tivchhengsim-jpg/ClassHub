
<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

const form = reactive({
  title: '',
  category: '',
  price: 0,
  capacity: 1,
  mode: 'in-person' as 'online' | 'in-person',
  description: '',
})

const submitted = ref(false)
const success = ref(false)

const errors = computed(() => ({
  title: form.title.trim() ? '' : 'Class title is required.',
  category: form.category ? '' : 'Please select a category.',
  price:
    Number.isFinite(form.price) && form.price >= 0
      ? ''
      : 'Price must be 0 or greater.',
  capacity:
    Number.isInteger(form.capacity) && form.capacity > 0
      ? ''
      : 'Capacity must be greater than 0.',
  description: form.description.trim()
    ? ''
    : 'Class description is required.',
}))

function handleSubmit() {
  submitted.value = true
  success.value = false

  if (Object.values(errors.value).some((message) => message !== '')) {
    return
  }

  success.value = true
}
</script>

<template>
  <main class="form-page">
    <h1>Create New Class</h1>
    <p>Fill in the details to publish your class.</p>

    <form @submit.prevent="handleSubmit" novalidate>
      <div class="field">
        <label for="title">Class Title *</label>
        <input id="title" v-model="form.title" type="text" />
        <small v-if="submitted && errors.title" class="error">
          {{ errors.title }}
        </small>
      </div>

      <div class="field">
        <label for="category">Category *</label>
        <select id="category" v-model="form.category">
          <option value="">Select category</option>
          <option value="Programming">Programming</option>
          <option value="Language">Language</option>
          <option value="Design">Design</option>
          <option value="Business">Business</option>
        </select>
        <small v-if="submitted && errors.category" class="error">
          {{ errors.category }}
        </small>
      </div>

      <div class="field">
        <label for="price">Price (USD) *</label>
        <input id="price" v-model.number="form.price" type="number" min="0" />
        <small v-if="submitted && errors.price" class="error">
          {{ errors.price }}
        </small>
      </div>

      <div class="field">
        <label for="capacity">Maximum Students *</label>
        <input
          id="capacity"
          v-model.number="form.capacity"
          type="number"
          min="1"
        />
        <small v-if="submitted && errors.capacity" class="error">
          {{ errors.capacity }}
        </small>
      </div>

      <div class="field">
        <label for="mode">Teaching Mode *</label>
        <select id="mode" v-model="form.mode">
          <option value="in-person">In-person</option>
          <option value="online">Online</option>
        </select>
      </div>

      <div class="field">
        <label for="description">Class Description *</label>
        <textarea id="description" v-model="form.description" rows="4" />
        <small v-if="submitted && errors.description" class="error">
          {{ errors.description }}
        </small>
      </div>

      <button type="submit">Create Class</button>

      <p v-if="success" class="success">
        Form validation passed! Class is ready to be submitted.
      </p>
    </form>
  </main>
</template>

<style scoped>
.form-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  gap: 6px;
}

input,
select,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font: inherit;
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background: #183b80;
  color: white;
  cursor: pointer;
}

.error {
  color: #dc2626;
}

.success {
  color: #15803d;
  margin-top: 16px;
}
</style>
