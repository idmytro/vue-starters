<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const msg = 'Vite + Vue + Unocss'
</script>

<template>
  <div class="flex items-center justify-center gap-48px">
    <a
      href="https://vite.dev"
      target="_blank"
      class="filter transition-filter duration-300 will-change-filter hover:drop-shadow-[0_0_2em_#646cffaa]"
    >
      <span class="i-vscode-icons-file-type-vite block h-96px w-96px text-0">Vite</span>
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
      class="filter transition-filter duration-300 will-change-filter hover:drop-shadow-[0_0_2em_#42b883aa]"
    >
      <span class="i-vscode-icons-file-type-vue inline-block h-96px w-96px text-0">Vue</span>
    </a>
    <a
      href="https://unocss.dev/"
      target="_blank"
      class="filter transition-filter duration-300 will-change-filter hover:drop-shadow-[0_0_2em_#c76dd1aa]"
    >
      <span class="i-vscode-icons-file-type-unocss inline-block h-96px w-96px text-0">Unocss</span>
    </a>
  </div>

  <h1 class="text-3.2em leading-[1.1]">
    {{ msg }}
  </h1>

  <div class="card">
    <button
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
    >create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
    >Vue Docs Scaling up Guide</a>.
  </p>
  <p class="text-[#888]">
    Click on the Vite, Vue and Unocss logos to learn more
  </p>
</template>
