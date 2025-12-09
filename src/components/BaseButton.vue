<script setup lang="ts">
import { motion } from 'motion-v';

type SizeVariants = 'xsm' | 'sm' | 'md';

withDefaults(
  defineProps<{
    size?: SizeVariants;
    customClass?: string | string[];
  }>(),
  {
    size: 'md',
    customClass: '',
  }
);

const sizeVariants: Record<SizeVariants, string> = {
  xsm: 'text-[11px] p-2',
  sm: 'text-[13px] p-1',
  md: 'text-md p-3',
};
</script>

<template>
  <motion.button
    :while-hover="{
      scale: 1.1,
      y: -2,
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.2, ease: 'easeInOut' },
    }"
    :while-press="{ scale: 1, transition: { duration: 0.2, ease: 'easeInOut' } }"
    :transition="{ type: 'spring', bounce: 0.7, duration: 1 }"
    :class="[
      sizeVariants[size],
      customClass,
      'flex gap-1 items-center cursor-pointer hover:opacity-80',
    ]"
  >
    <slot></slot>
  </motion.button>
</template>
