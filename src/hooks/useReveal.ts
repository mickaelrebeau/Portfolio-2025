import { onMounted, onUnmounted, type Ref } from 'vue'

export function useReveal(elementRef: Ref<HTMLElement | null>, options: IntersectionObserverInit = {}) {
    let observer: IntersectionObserver | null = null

    const observe = () => {
        if (!elementRef.value) return

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, {
            threshold: 0.1,
            ...options
        })

        observer.observe(elementRef.value)
    }

    onMounted(() => {
        observe()
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })
}

export function useRevealAll(selector: string, options: IntersectionObserverInit = {}) {
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        const elements = document.querySelectorAll(selector)

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, {
            threshold: 0.1,
            ...options
        })

        elements.forEach((el) => {
            observer?.observe(el)
        })
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })
}
