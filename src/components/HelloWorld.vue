<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-2xl font-bold">{{ msg }}</h1>

  <div class="card bg-gray-100 p-4 rounded">
    <button type="button" @click="count++" class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      count is {{ count }}
    </button>
    <p class="text-gray-600">
      Edit
      <code class="bg-gray-200 rounded p-1">components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
