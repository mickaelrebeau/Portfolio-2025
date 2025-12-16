<template>
    <div class="p-6 border-l-2 border-dynamic-separator hover:bg-white/5 transition-all duration-300 cursor-pointer hoverable group"
        :class="{ 'active-project-card': isActive }">
        <div class="flex justify-between items-start pointer-events-none">
            <h3
                class="text-xl md:text-2xl font-bold text-dynamic-primary group-hover:text-white transition-colors font-syne">
                {{ project.title }}
            </h3>
            <ArrowRight
                class="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-(--accent)" />
        </div>
        <p class="text-sm text-dynamic-secondary mt-2 line-clamp-1 pointer-events-none">
            {{ project.desc }}
        </p>
        <div class="flex gap-2 mt-4 pointer-events-none">
            <span v-for="tag in project.tags" :key="tag"
                class="text-[10px] border border-dynamic-separator px-2 py-1 rounded text-dynamic-secondary group-hover:border-(--accent)/30 group-hover:text-(--accent) transition-colors uppercase">
                {{ tag }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import type { Project } from '@/types'

defineProps<{
    project: Project
    isActive: boolean
}>()
</script>
