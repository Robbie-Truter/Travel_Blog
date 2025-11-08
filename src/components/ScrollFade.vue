<script setup lang="ts">
import { motion } from 'motion-v';
import type { Transition } from 'motion-v';

withDefaults(
  defineProps<{
    className?: string;
    transition?: Transition;
  }>(),
  {
    className: '',
    transition: () => ({ delay: 0.5, type: 'spring', duration: 0.5, bounce: 0.3, ease: 'easeIn' }),
  }
);
</script>

<template>
  <motion.div
    :class="className"
    :initial="{ opacity: 0, y: 50, filter: 'blur(5px)' }"
    :in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
    :transition="transition"
    :in-view-options="{ once: true }"
    :viewport="{ amount: 0.7 }"
  >
    <slot></slot>
  </motion.div>
</template>
