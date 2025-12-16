<template>
    <div ref="cardRef" class="bento-card tilt-card rounded-3xl hoverable reveal-on-scroll"
        :style="{ transform: props.noTilt ? undefined : transform }" @mousemove="onMouseMove"
        @mouseleave="onMouseLeave">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTilt } from '@/hooks/useTilt'

interface Props {
    noTilt?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    noTilt: false
})

const cardRef = ref<HTMLElement | null>(null)
const { transform, handleMouseMove, handleMouseLeave } = useTilt(cardRef)

const onMouseMove = (e: MouseEvent) => {
    if (!props.noTilt) {
        handleMouseMove(e)
    }
}

const onMouseLeave = () => {
    if (!props.noTilt) {
        handleMouseLeave()
    }
}
</script>
