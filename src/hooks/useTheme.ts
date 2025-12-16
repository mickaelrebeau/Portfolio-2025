import { ref, onMounted } from 'vue'

export type Theme = 'dark' | 'light'

const theme = ref<Theme>('dark')

export function useTheme() {
    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', theme.value)
        localStorage.setItem('theme', theme.value)
    }

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme') as Theme | null
        if (savedTheme) {
            theme.value = savedTheme
        }
        document.documentElement.setAttribute('data-theme', theme.value)
    }

    onMounted(() => {
        initTheme()
    })

    return {
        theme,
        toggleTheme,
        initTheme
    }
}
