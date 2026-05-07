<script setup lang="ts">
import { motion } from 'motion-v';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href);
  toast.add({
    severity: 'success',
    summary: 'Link Copied',
    detail: 'The adventure is now in your clipboard!',
    life: 3000,
    group: 'tr',
  });
};
</script>

<template>
  <motion.div
    v-tooltip.left="{
      value: 'Copy link to share',
      showDelay: 1100,
      pt: {
        text: 'bg-linear-to-br! from-[#121212]! !via-[#1a1a1a] to-[#222222]! text-primary-contrast! font-medium!',
      },
    }"
    :initial="{ opacity: 0, x: 20 }"
    :animate="{ opacity: 1, x: 0 }"
    :transition="{ delay: 0.2, duration: 0.5 }"
    class="fixed right-4 md:right-8 top-1/2 z-100 -translate-y-1/2"
  >
    <button
      title="Copy Link"
      class="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-800 shadow-xl backdrop-blur-md transition-all cursor-pointer hover:bg-white hover:scale-110 active:scale-95"
      @click="copyLink"
    >
      <i class="pi pi-link text-lg"></i>
    </button>
  </motion.div>
</template>
