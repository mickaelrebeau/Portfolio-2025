<template>
  <section id="about" class="py-32 px-6 bento-container">
    <div class="container mx-auto">
      <div class="mb-16">
        <h2 class="text-6xl md:text-8xl font-syne font-bold mb-6 clean-text text-dynamic-primary">À PROPOS</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
        <BentoCard no-tilt class="col-span-1 md:col-span-2 row-span-1 p-10 flex flex-col justify-between">
          <div class="tilt-content">
            <img src="@/assets/logo.png" alt="Coding" class="w-24 h-24 object-cover mb-6">
            <h3 class="text-3xl font-syne font-bold mb-4 text-dynamic-primary">Qui suis-je ?</h3>
            <p class="text-dynamic-secondary text-lg leading-relaxed">
              Passionné depuis mes 14 ans par le monde de l'informatique, je suis aujourd'hui un développeur évoluant
              principalement dans l'écosystème Javascript/Typescript. Je combine une rigueur technique (NestJS, Django)
              avec une sensibilité créative (React, Vue). Retrouvez-moi sur Twitch où je code en live.
            </p>
          </div>
        </BentoCard>

        <BentoCard :no-tilt="false"
          class="col-span-1 row-span-1 p-10 flex flex-col justify-center items-center text-center"
          style="background-image: radial-gradient(circle at center, #222 0%, #050505 100%);">
          <div class="tilt-content flex flex-col items-center justify-center w-full">
            <Cpu class="w-12 h-12 text-(--accent) mb-6" />
            <h3 class="text-2xl font-syne font-bold mb-6 text-gray-200">Tech Stack</h3>
            <div class="grid grid-cols-2 gap-4 text-sm w-full text-gray-400">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>React
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>Vue JS
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>NestJS
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>Python
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>Tailwind
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>Django
              </div>
            </div>
          </div>
        </BentoCard>

        <BentoCard no-tilt class="col-span-1 row-span-1 relative overflow-hidden group min-h-[300px]">
          <a href="https://twitch.tv/mike_dreeman" target="_blank" class="block w-full h-full relative">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Coding"
              class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity grayscale group-hover:grayscale-0">
            <div class="absolute bottom-8 left-8 tilt-content">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span class="text-xs font-bold uppercase tracking-wider text-red-500">Live Stream</span>
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-syne font-bold text-(--text-primary)">Coding Sessions</h3>
                <div class="flex items-center gap-2">
                  <p class="text-sm text-(--text-primary)">Follow moi sur Twitch</p>
                  <ExternalLink class="w-3 h-3" />
                </div>
              </div>
            </div>
          </a>
        </BentoCard>

        <BentoCard no-tilt
          class="col-span-1 md:col-span-2 row-span-1 p-10 flex items-center justify-between bg-(--accent) text-black dark:text-white">
          <div class="tilt-content">
            <h3 class="text-4xl font-syne font-bold mb-2">Game Dev | Mobile Dev | IA & Data </h3>
            <p class="text-(--text-primary) max-w-sm">J'aime apprendre de nouvelles technologies. Je partage mes
              découvertes sur Twitter la plupart du temps mais également sur Twitch et Linkedin parfois.</p>
          </div>
          <BrainCircuit class="w-24 h-24 opacity-20 tilt-content" />
        </BentoCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Cpu, BrainCircuit, ExternalLink } from 'lucide-vue-next'
import BentoCard from '@/components/ui/BentoCard.vue'
</script>
