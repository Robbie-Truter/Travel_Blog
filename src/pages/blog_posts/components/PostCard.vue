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
    class="w-72 sm:w-80 lg:w-96 bg-white h-72 sm:h-80 lg:h-120 shadow hover:shadow-xl cursor-pointer rounded-md"
  >
    <figure class="relative w-full h-[80%] overflow-clip">
      <img
        :src="`http://localhost:8055/assets/${coverImg}`"
        :alt="title ?? 'Blog post image'"
        class="w-full h-full object-cover rounded-t-md brightness-[0.9]"
      />
      <figcaption
        class="flex flex-col gap-4 absolute top-5 left-5 font-bold text-shadow-lg transition duration-100 ease-in-out text-white"
      >
        <div
          class="p-2 w-fit rounded-full text-sm lg:text-[18px] shadow-xl border bg-color-primary"
        >
          {{ countryName }}
        </div>
        <div
          class="p-2 w-fit rounded-full text-[9px] lg:text-[12px] shadow-xl border bg-color-primary"
        >
          {{ formatDate(dateCreated) ?? 'Could not get date :(' }}
        </div>
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
