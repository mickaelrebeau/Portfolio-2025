import { ref, type Ref } from 'vue'

export function useTilt(cardRef: Ref<HTMLElement | null>) {
    const transform = ref('')

    const handleMouseMove = (e: MouseEvent) => {
        if (!cardRef.value) return

        const rect = cardRef.value.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        transform.value = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const handleMouseLeave = () => {
        transform.value = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
    }

    return {
        transform,
        handleMouseMove,
        handleMouseLeave
    }
}
