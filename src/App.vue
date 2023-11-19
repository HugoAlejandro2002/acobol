<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex justify-center items-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="h-24 transition duration-300 ease-in-out hover:drop-shadow-lg" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="h-24 transition duration-300 ease-in-out hover:drop-shadow-lg" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
