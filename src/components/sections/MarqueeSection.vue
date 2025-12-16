<template>
  <section class="py-12 border-y border-white/5 bg-(--accent) text-black overflow-hidden -rotate-2 scale-110">
    <div class="marquee-container font-syne font-black text-6xl uppercase tracking-tighter">
      <div class="marquee-content">
        {{ marqueeText }}{{ marqueeText }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const marqueeText = 'Frontend Developer — Backend Architect — Machine Learning Enthusiast — Mobile Developer — Streamer — Game Developer — '
</script>
