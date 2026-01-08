<script setup lang="ts">
import type { Transition } from 'motion-v';
import { motion } from 'motion-v';

withDefaults(
  defineProps<{
    className?: string;
    transition?: Transition;
  }>(),
  {
    className: '',
    transition: () => ({
      delay: 0.2,
      duration: 0.45,
    }),
  }
);
</script>

<template>
  <motion.div
    :class="className"
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="transition"
    :in-view-options="{ once: true }"
    :viewport="{ amount: 0.8, once: true }"
  >
    <slot></slot>
  </motion.div>
</template>
