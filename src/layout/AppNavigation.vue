<template>
  <nav class="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300">
    <a href="#"
      class="text-xl font-bold font-syne hoverable tracking-tighter hover:text-(--accent) transition-colors text-dynamic-primary z-50">
      MR.
    </a>

    <ul class="hidden md:flex gap-8 text-sm uppercase tracking-widest text-dynamic-primary">
      <li v-for="link in navLinks" :key="link.href" class="hoverable hover:text-(--accent) transition-colors">
        <a :href="link.href" @click.prevent="scrollToSection(link.href)">{{ link.label }}</a>
      </li>
    </ul>

    <div class="flex items-center gap-4 z-50">
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

      <button class="md:hidden hoverable w-10 h-10 flex items-center justify-center text-dynamic-primary"
        @click="isMenuOpen = !isMenuOpen">
        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isMenuOpen" class="fixed inset-0 z-40 flex flex-col justify-center items-center backdrop-blur-xl"
          style="background-color: color-mix(in srgb, var(--bg-secondary), transparent 5%)">
          <ul class="flex flex-col items-center gap-8">
            <li v-for="(link, index) in navLinks" :key="link.href" class="overflow-hidden">
              <a :href="link.href" @click.prevent="scrollToSection(link.href)"
                class="text-4xl md:text-6xl font-syne font-bold uppercase hover:text-(--accent) transition-colors block transform translate-y-0 text-dynamic-primary"
                :style="{ animation: `slideUp 0.5s ease forwards ${index * 0.1}s` }">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'
import { useLenis } from 'lenis/vue'
import { useTheme } from '@/hooks/useTheme'

const { theme, toggleTheme } = useTheme()
const isMenuOpen = ref(false)
const lenis = useLenis()

const navLinks = [
  { href: '#about', label: 'A Propos' },
  { href: '#work', label: 'Projets' },
  { href: '#contact', label: 'Contact' }
]

const scrollToSection = (href: string) => {
  isMenuOpen.value = false
  if (lenis.value) {
    lenis.value.scrollTo(href, { offset: 0, duration: 1.5 })
  } else {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
