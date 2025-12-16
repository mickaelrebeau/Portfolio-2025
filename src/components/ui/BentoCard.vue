<template>
    <div ref="cardRef" class="bento-card tilt-card rounded-3xl hoverable reveal-on-scroll" :style="{ transform }"
        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTilt } from '@/hooks/useTilt'

const cardRef = ref<HTMLElement | null>(null)
const { transform, handleMouseMove, handleMouseLeave } = useTilt(cardRef)
</script>
