<script setup lang="ts">
import { formatDate } from '@/util/formatDate';
import { motion } from 'motion-v';

defineProps<{
  title?: string;
  countryName?: string;
  coverImg?: string;
  dateCreated?: string;
}>();
</script>

<template>
  <motion.article
    :aria-label="`Open blog post: ${title}`"
    role="button"
    tabindex="0"
    :while-hover="{ scale: 1.04 }"
    :while-press="{ scale: 1, transition: { type: 'spring', duration: 0.3 } }"
    :transition="{ type: 'spring', duration: 0.8 }"
    class="group w-72 sm:w-80 lg:w-96 bg-white h-72 sm:h-80 lg:h-120 shadow hover:shadow-xl cursor-pointer rounded-md"
  >
    <figure class="relative h-[80%] w-full overflow-hidden rounded-t-md">
      <div
        class="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/40 via-black/15 to-transparent"
      ></div>

      <img
        :src="`http://localhost:8055/assets/${coverImg}`"
        :alt="title ?? 'Blog post image'"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <figcaption class="absolute left-4 bottom-4 z-20 flex flex-col gap-2 text-sm font-semibold">
        <span
          class="rounded-full bg-color-primary/85 px-3 py-1.5 text-white shadow-lg backdrop-blur"
        >
          {{ countryName }}
        </span>

        <span
          class="w-fit rounded-full bg-white/80 px-3 py-1 text-xs text-slate-700 shadow-md backdrop-blur"
        >
          {{ formatDate(dateCreated) ?? 'Unknown date' }}
        </span>
      </figcaption>
    </figure>

    <div class="flex items-center justify-center px-4 h-[20%] w-full">
      <figcaption
        class="p-3 text-sm lg:text-lg font-bold rounded-md transition duration-100 ease-in-out cursor-pointer text-shadow-sm"
      >
        {{ title }}
      </figcaption>
    </div>
  </motion.article>
</template>
