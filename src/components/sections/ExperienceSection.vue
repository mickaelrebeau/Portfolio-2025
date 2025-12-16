<template>
    <section class="py-32 px-6">
        <div class="container mx-auto">
            <h2 class="text-6xl font-syne font-bold mb-16 text-center clean-text text-dynamic-primary">EXPÉRIENCES</h2>

            <div class="space-y-8 max-w-4xl mx-auto">
                <div v-for="exp in experiences" :key="exp.title"
                    class="group hoverable p-6 border-l-2 border-dynamic-separator hover:border-(--accent) hover:bg-white/5 transition-all duration-300 reveal-on-scroll hover:translate-x-2">
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <h3 class="text-2xl font-bold text-dynamic-primary group-hover:text-(--accent)">
                            {{ exp.title }}
                        </h3>
                        <span class="text-sm text-dynamic-secondary">{{ exp.period }}</span>
                    </div>
                    <p class="text-lg text-dynamic-secondary mb-2">{{ exp.company }}</p>
                    <p v-if="exp.description" class="text-sm text-dynamic-secondary">{{ exp.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { experiences } from '@/data/projects'
</script>
