<template>
    <section id="work"
        class="min-h-screen py-12 md:py-24 px-6 relative bg-dynamic-secondary transition-colors duration-500">
        <div class="container mx-auto">
            <div class="mb-12 flex justify-between items-end">
                <h2 class="text-4xl md:text-6xl font-syne font-bold clean-text text-dynamic-primary">WORK STATION</h2>
                <p class="hidden md:block text-(--accent) font-mono text-sm tracking-widest animate-pulse">SYSTEM
                    READY</p>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 lg:h-[80vh]">
                <div class="w-full lg:w-1/3 flex flex-col gap-4 relative">
                    <button @click="scrollUp" :disabled="!canScrollUp"
                        class="w-full flex items-center justify-center p-2 transition-all duration-300 rounded-t-lg group border border-transparent hover:border-(--accent)/20"
                        :class="canScrollUp ? 'text-dynamic-primary hover:text-(--accent) hover:bg-white/5 cursor-pointer' : 'opacity-0 pointer-events-none'">
                        <ChevronUp class="w-6 h-6 transition-transform"
                            :class="{ 'group-hover:-translate-y-1': canScrollUp }" />
                    </button>

                    <div ref="projectListRef" @scroll="checkScroll"
                        class="flex flex-col gap-2 overflow-hidden h-full relative scroll-smooth">
                        <ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project"
                            :is-active="currentProjectIndex === index" @click="loadProject(index)" />
                    </div>

                    <button @click="scrollDown" :disabled="!canScrollDown"
                        class="w-full flex items-center justify-center p-2 transition-all duration-300 rounded-b-lg group border border-transparent hover:border-(--accent)/20"
                        :class="canScrollDown ? 'text-dynamic-primary hover:text-(--accent) hover:bg-white/5 cursor-pointer' : 'opacity-0 pointer-events-none'">
                        <ChevronDown class="w-6 h-6 transition-transform"
                            :class="{ 'group-hover:translate-y-1': canScrollDown }" />
                    </button>
                </div>

                <div class="w-full lg:w-2/3 relative hidden lg:flex flex-col">
                    <div class="monitor-frame rounded-t-xl p-3 flex justify-between items-center text-xs text-gray-500 font-mono select-none"
                        style="border-bottom: 1px solid var(--monitor-border);">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <span>LIVE PREVIEW TERMINAL</span>
                        <div class="flex gap-2">
                            <span class="text-(--accent)">● REC</span>
                        </div>
                    </div>

                    <div class="relative flex-1 rounded-b-xl overflow-hidden group monitor-frame shadow-2xl"
                        style="background: black;">
                        <div v-if="isLoading"
                            class="absolute inset-0 bg-black z-20 flex flex-col items-center justify-center">
                            <div class="text-(--accent) font-mono animate-pulse mb-2">INITIALIZING...</div>
                            <div class="w-32 h-1 bg-gray-800 rounded overflow-hidden">
                                <div class="h-full bg-(--accent) animate-shimmer"></div>
                            </div>
                        </div>

                        <div v-if="currentProjectIndex === -1"
                            class="absolute inset-0 flex flex-col items-center justify-center z-10"
                            style="background: var(--monitor-bg);">
                            <MonitorPlay class="w-16 h-16 text-gray-500 mb-4 animate-bounce" />
                            <p class="text-gray-500 font-mono text-sm">SELECT A PROJECT TO INITIALIZE</p>
                        </div>

                        <iframe ref="iframeRef" :src="currentUrl"
                            class="w-full h-full bg-white transition-opacity duration-500"
                            :class="{ 'opacity-0': isLoading || currentProjectIndex === -1, 'opacity-100': !isLoading && currentProjectIndex !== -1 }"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />

                        <div
                            class="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity flex gap-4">
                            <button
                                class="bg-black/80 text-white p-3 rounded-full border border-white/20 hover:border-(--accent) hover:text-(--accent) transition-colors hoverable transform hover:scale-110"
                                @click="refreshIframe">
                                <RefreshCw class="w-5 h-5" />
                            </button>
                            <a :href="currentUrl" target="_blank"
                                class="bg-(--accent) dark:bg-(--accent) text-white dark:text-black px-6 py-3 rounded-full font-bold text-sm uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors hoverable transform hover:scale-105">
                                Full Screen
                                <ExternalLink class="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MonitorPlay, RefreshCw, ExternalLink, ChevronUp, ChevronDown } from 'lucide-vue-next'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const currentProjectIndex = ref(-1)
const currentUrl = ref('')
const isLoading = ref(false)
const iframeRef = ref<HTMLIFrameElement | null>(null)
const projectListRef = ref<HTMLElement | null>(null)
const canScrollUp = ref(false)
const canScrollDown = ref(true)
const isMobile = ref(window.innerWidth < 720)

const loadProject = (index: number) => {
    if (isMobile.value) {
        window.open(projects[index].url, '_blank')
        return
    }

    if (currentProjectIndex.value === index) return

    currentProjectIndex.value = index
    isLoading.value = true

    setTimeout(() => {
        currentUrl.value = projects[index].url

        if (iframeRef.value) {
            iframeRef.value.onload = () => {
                isLoading.value = false
            }
        }

        setTimeout(() => {
            isLoading.value = false
        }, 2000)
    }, 800)
}

const refreshIframe = () => {
    if (currentProjectIndex.value !== -1 && iframeRef.value) {
        const url = currentUrl.value
        currentUrl.value = ''
        setTimeout(() => {
            currentUrl.value = url
        }, 100)
    }
}

const checkScroll = () => {
    if (projectListRef.value) {
        const { scrollTop, scrollHeight, clientHeight } = projectListRef.value
        canScrollUp.value = scrollTop > 10
        canScrollDown.value = scrollTop + clientHeight < scrollHeight - 10
    }
}

const scrollUp = () => {
    if (projectListRef.value) {
        projectListRef.value.scrollBy({ top: -150, behavior: 'smooth' })
    }
}

const scrollDown = () => {
    if (projectListRef.value) {
        projectListRef.value.scrollBy({ top: 150, behavior: 'smooth' })
    }
}

onMounted(() => {
    setTimeout(checkScroll, 100)

    if (projectListRef.value) {
        const resizeObserver = new ResizeObserver(() => {
            checkScroll()
        })
        resizeObserver.observe(projectListRef.value)
    }

    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth < 720
        checkScroll()
    })
})
</script>
