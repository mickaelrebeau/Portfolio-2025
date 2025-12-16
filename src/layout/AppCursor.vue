<template>
  <div class="cursor hidden md:block" :class="{ hovered: isHovered }" :style="{
    left: `${cursorX}px`,
    top: `${cursorY}px`
  }"></div>
</template>

<script setup lang="ts">
import { useCursor } from '@/hooks/useCursor'

const { cursorX, cursorY, isHovered } = useCursor()
</script>
