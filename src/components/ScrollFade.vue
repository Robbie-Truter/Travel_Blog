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
      duration: 0.4,
      delay: 0.4,
      type: 'spring',
      bounce: 0.4,
    }),
  }
);
</script>

<template>
  <motion.div
    :class="className"
    :initial="{ opacity: 0, y: 10 }"
    :in-view="{ opacity: 1, y: 0 }"
    :transition="transition"
    :in-view-options="{ once: true }"
    :viewport="{ amount: 0.8, once: true }"
  >
    <slot></slot>
  </motion.div>
</template>
