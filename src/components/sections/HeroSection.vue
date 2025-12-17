<template>
  <section class="h-screen w-full flex flex-col justify-center px-6 relative overflow-hidden">
    <div
      class="absolute top-1/4 right-10 w-[500px] h-[500px] bg-(--accent) rounded-full blur-[180px] opacity-10 animate-pulse mix-blend-screen">
    </div>

    <div class="container mx-auto z-10">
      <h3 class="reveal-text text-(--accent) mb-4 uppercase tracking-widest text-sm font-bold"
        :class="{ visible: isVisible }">
        Développeur Fullstack - Vue.js & Python
      </h3>

      <h1 class="text-[12vw] leading-[0.85] font-extrabold tracking-tighter perspective-container overflow-hidden">
        <span class="block clean-text text-dynamic-primary" :class="{ visible: isVisible }">
          MICKAEL
        </span>
        <br />
        <span class="block clean-text text-dynamic-secondary" :class="{ visible: isVisible }"
          style="transition-delay: 0.1s;">
          RÉBEAU
        </span>
      </h1>

      <div class="mt-12 flex flex-col md:flex-row justify-between items-end overflow-hidden">
        <div class="reveal-text max-w-md text-dynamic-secondary text-lg" :class="{ visible: isVisible }"
          style="transition-delay: 0.3s;">
          Je construis des applications web et mobiles avec Vue.js et Python. Basé en France, disponible dans le monde
          entier.
        </div>

        <div class="reveal-text mt-8 md:mt-0 flex gap-4 p-1" :class="{ visible: isVisible }"
          style="transition-delay: 0.5s;">
          <a href="https://github.com/mickaelrebeau" target="_blank"
            class="w-12 h-12 border border-dynamic rounded-full flex items-center justify-center text-dynamic-primary hover:bg-(--accent) hover:text-black hover:border-(--accent) transition-all hoverable transform hover:scale-105">
            <Github class="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/mickael-rebeau" target="_blank"
            class="w-12 h-12 border border-dynamic rounded-full flex items-center justify-center text-dynamic-primary hover:bg-(--accent) hover:text-black hover:border-(--accent) transition-all hoverable transform hover:scale-105">
            <Linkedin class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 left-6 animate-bounce">
      <ArrowDown class="text-dynamic-secondary w-6 h-6" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Github, Linkedin, ArrowDown } from 'lucide-vue-next'

const isVisible = ref(false)

const props = defineProps<{
  loaded?: boolean
}>()

watch(() => props.loaded, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      isVisible.value = true
    }, 100)
  }
}, { immediate: true })
</script>
