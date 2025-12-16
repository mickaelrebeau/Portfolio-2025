<template>
  <div id="preloader" ref="preloaderRef" :style="{ transform: isLoaded ? 'translateY(-100%)' : 'translateY(0)' }">
    <div ref="textRef" class="loader-text font-bold tracking-tighter" v-html="displayText"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// @ts-ignore
const preloaderRef = ref<HTMLElement | null>(null)

const textRef = ref<HTMLElement | null>(null)
const displayText = ref('MIKE DREEMAN ©2025')
const isLoaded = ref(false)

const emit = defineEmits<{
  loaded: []
}>()

class TextScramble {
  private el: HTMLElement
  private chars = '!<>-_\\/[]{}—=+*^?#________'
  private queue: Array<{ from: string; to: string; start: number; end: number; char?: string }> = []
  private frame = 0
  private frameRequest = 0
  private resolve: (() => void) | null = null

  constructor(el: HTMLElement) {
    this.el = el
    this.update = this.update.bind(this)
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)

    return new Promise((resolve) => {
      this.resolve = resolve
      this.queue = []

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }

      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
    })
  }

  update(): void {
    let output = ''
    let complete = 0

    for (let i = 0; i < this.queue.length; i++) {
      const item = this.queue[i]
      const { from, to, start, end } = item
      let { char } = item

      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="opacity-50">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output

    if (complete === this.queue.length) {
      this.resolve?.()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

onMounted(() => {
  if (textRef.value) {
    const fx = new TextScramble(textRef.value)
    fx.setText('MIKE DREEMAN ©2025')

    setTimeout(() => {
      isLoaded.value = true

      setTimeout(() => {
        emit('loaded')
      }, 500)
    }, 1800)
  }
})
</script>
