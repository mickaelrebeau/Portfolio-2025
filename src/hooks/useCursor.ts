import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const isHovered = ref(false)

export function useCursor() {
    const handleMouseMove = (e: MouseEvent) => {
        cursorX.value = e.clientX
        cursorY.value = e.clientY

        const target = e.target as HTMLElement
        const hoverable = target.closest('.hoverable')
        isHovered.value = !!hoverable
    }

    onMounted(() => {
        document.addEventListener('mousemove', handleMouseMove)
    })

    onUnmounted(() => {
        document.removeEventListener('mousemove', handleMouseMove)
    })

    return {
        cursorX,
        cursorY,
        isHovered
    }
}
