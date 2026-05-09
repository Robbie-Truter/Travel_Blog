<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { motion } from 'motion-v';

defineProps<{
  refetch: () => void;
}>();
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    class="relative mx-auto my-12 flex min-h-[400px] w-full max-w-2xl flex-col items-center justify-center space-y-6 rounded-3xl border border-neutral-200 bg-white/50 p-8 text-center shadow-xl backdrop-blur-md"
  >
    <div class="rounded-2xl bg-amber-50 p-4">
      <i class="pi pi-map text-4xl text-amber-500"></i>
    </div>

    <div class="space-y-2">
      <h3 class="text-2xl font-bold text-neutral-800">
        Top Destinations are currently out of reach.
      </h3>
      <p class="text-neutral-600">
        We couldn't load the destination tabs. Please try again or check back later.
      </p>
    </div>

    <BaseButton
      custom-class="group flex items-center gap-2 rounded-full bg-[#EDB5BF] px-8 py-3 font-bold text-white shadow-lg hover:bg-[#d9a4ac]"
      @click="refetch"
    >
      <i class="pi pi-refresh group-hover:rotate-180 transition-all"></i>
      Try Again
    </BaseButton>
  </motion.div>
</template>
