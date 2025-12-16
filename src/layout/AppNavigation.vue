<template>
  <nav class="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300">
    <a href="#"
      class="text-xl font-bold font-syne hoverable tracking-tighter hover:text-(--accent) transition-colors text-dynamic-primary">
      MR.
    </a>

    <div class="hidden md:flex gap-8 text-sm uppercase tracking-widest text-dynamic-primary">
      <a v-for="link in navLinks" :key="link.href" :href="link.href"
        class="hoverable hover:text-(--accent) transition-colors" @click.prevent="scrollToSection(link.href)">
        {{ link.label }}
      </a>
    </div>

    <div class="flex items-center gap-4">
      <button
        class="hoverable w-10 h-10 rounded-full border border-dynamic flex items-center justify-center text-dynamic-primary hover:bg-(--accent) hover:text-black transition-all"
        @click="toggleTheme">
        <Sun v-if="theme === 'light'" class="w-4 h-4" />
        <Moon v-else class="w-4 h-4" />
      </button>

      <a href="mailto:rebeau.mickael@gmail.com"
        class="hidden md:block px-6 py-2 border border-dynamic rounded-full text-xs uppercase hover:bg-(--text-primary) hover:text-(--text-primary-hover) transition-all hoverable">
        Let's Talk
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/hooks/useTheme'

const { theme, toggleTheme } = useTheme()

const navLinks = [
  { href: '#about', label: 'A Propos' },
  { href: '#work', label: 'Projets' },
  { href: '#contact', label: 'Contact' }
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
