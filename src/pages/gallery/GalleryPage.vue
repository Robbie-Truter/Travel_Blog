<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v';
import { computed } from 'vue';
import { useGetGalleryImages } from './composables/useGetGalleryImages';

const DIRECTUS_URL = import.meta.env.VITE_API_BASE_URL;

const { data: images, isFetching, isError } = useGetGalleryImages();

const filteredImages = computed(() => {
  return images?.value?.filter((img) => img.type.startsWith('image/')) || [];
});
</script>

<template>
  <div class="min-h-screen bg-color-secondary/30 pt-20 pb-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <header class="mb-16 text-center space-y-4">
        <motion.h1
          class="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
          :initial="{ opacity: 0, y: -20 }"
          :animate="{ opacity: 1, y: 0 }"
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          class="mx-auto max-w-2xl text-lg text-gray-600"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ delay: 0.2 }"
        >
          A collection of moments captured during our travels around the world.
        </motion.p>
        <div class="flex justify-center pt-2">
          <span class="h-1 w-12 rounded-full bg-color-primary"></span>
        </div>
      </header>

      <!-- Gallery Grid -->
      <AnimatePresence>
        <div
          v-if="isFetching"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="i in 8"
            :key="i"
            class="aspect-square animate-pulse rounded-2xl bg-gray-200"
          ></div>
        </div>

        <div
          v-else-if="isError"
          class="flex flex-col items-center justify-center py-20 text-center"
        >
          <i class="pi pi-exclamation-circle text-4xl text-color-primary mb-4"></i>
          <p class="text-xl font-medium text-gray-800">Oops! We couldn't load the gallery.</p>
          <p class="text-gray-500">Please try again later.</p>
        </div>

        <div
          v-else-if="filteredImages.length === 0"
          class="flex flex-col items-center justify-center py-20 text-center"
        >
          <i class="pi pi-image text-4xl text-gray-300 mb-4"></i>
          <p class="text-xl font-medium text-gray-800">No photos found.</p>
          <p class="text-gray-500">Check back later for new memories!</p>
        </div>

        <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <motion.div
            v-for="(image, index) in filteredImages"
            :key="image.id"
            class="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all hover:shadow-xl"
            :initial="{ opacity: 0, scale: 0.9 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ delay: index * 0.05 }"
            while-hover="{ scale: 1.02 }"
          >
            <img
              :src="`${DIRECTUS_URL}/assets/${image.id}?quality=60&format=webp&width=600`"
              :alt="image.title || 'Travel photo'"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            <!-- Overlay -->
            <div
              class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <div class="p-4 text-white">
                <p v-if="image.description" class="text-sm opacity-90 line-clamp-2">
                  {{ image.description }}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  </div>
</template>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>
