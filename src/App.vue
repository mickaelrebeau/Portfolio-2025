<template>
    <VueLenis root :options="lenisOptions" />
    <AppPreloader @loaded="onLoaded" />
    <AppCursor />
    <NoiseOverlay />
    <AppNavigation />

    <section v-show="isLoaded">
        <HeroSection :loaded="isLoaded" />
        <MarqueeSection />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <FooterSection />
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useTheme } from '@/hooks/useTheme'
import { VueLenis, useLenis } from 'lenis/vue'
import { inject } from '@vercel/analytics'
import AppPreloader from '@/layout/AppPreloader.vue'
import AppCursor from '@/layout/AppCursor.vue'
import AppNavigation from '@/layout/AppNavigation.vue'
import NoiseOverlay from '@/layout/NoiseOverlay.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MarqueeSection from '@/components/sections/MarqueeSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import WorkSection from '@/components/sections/WorkSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'

inject()

const isLoaded = ref(false)

const lenisOptions = {
    lerp: 0.1,
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
}

const lenis = useLenis()

useTheme()

const onLoaded = async () => {
    isLoaded.value = true

    await nextTick()

    setTimeout(() => {
        document.querySelectorAll('.reveal-text').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible')
            }, index * 100)
        })

        document.querySelectorAll('.h-screen .clean-text').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible')
            }, index * 200)
        })
    }, 100)

    setupScrollObserver()
}

const setupScrollObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('reveal-on-scroll')) {
                    entry.target.classList.add('visible')
                        ; (entry.target as HTMLElement).style.opacity = '1'
                        ; (entry.target as HTMLElement).style.transform = 'translateY(0)'
                }

                if (entry.target.classList.contains('clean-text')) {
                    entry.target.classList.add('visible')
                }
            }
        })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        (el as HTMLElement).style.opacity = '0'
            ; (el as HTMLElement).style.transform = 'translateY(50px)'
            ; (el as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        observer.observe(el)
    })

    document.querySelectorAll('.clean-text').forEach(el => {
        observer.observe(el)
    })
}

onMounted(() => {
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        const anchor = target.closest('a[href^="#"]')
        if (anchor) {
            e.preventDefault()
            const href = anchor.getAttribute('href')
            if (href && lenis.value) {
                lenis.value.scrollTo(href, {
                    offset: 0,
                    duration: 1.5,
                })
            }
        }
    })
})
</script>
