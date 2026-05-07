<script setup lang="ts">
import ProgressBar from 'primevue/progressbar';
import { onMounted, onUnmounted, ref } from 'vue';

const progress = ref(0);

const updateScrollProgress = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progress.value = Math.min(Math.max(scrolled, 0), 100);
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress);
});
</script>

<template>
  <div class="fixed top-0 left-0 z-100 w-full pointer-events-none">
    <ProgressBar
      :value="progress"
      :show-value="false"
      class="h-1.5! rounded-none! bg-transparent!"
      :pt="{
        value: {
          class:
            'bg-color-primary! shadow-[0_0_10px_rgba(237,181,191,0.8)] transition-all duration-150 ease-out',
        },
      }"
    />
  </div>
</template>
