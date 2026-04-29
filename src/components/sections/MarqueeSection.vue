<template>
  <section class="py-12 border-y border-white/5 bg-(--accent) text-black overflow-hidden -rotate-2 scale-110">
    <div class="marquee-container font-syne font-black text-4xl md:text-6xl uppercase tracking-tighter">
      <div class="marquee-content">
        {{ marqueeText }}{{ marqueeText }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const marqueeText = computed(() => t('marquee'))
</script>
