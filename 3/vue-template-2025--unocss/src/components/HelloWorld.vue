<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="text-center b1024px:text-left">
    <h1 class="relative top-[-10px] text-[2.6rem] fw-[500]">
      {{ msg }}
    </h1>
    <h3 class="text-[1.2rem]">
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>
