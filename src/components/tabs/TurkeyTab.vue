<script setup lang="ts">
const tabImages: string[] = [
  "/tabs/turkey/KasTownMonument.jpg",
  "/tabs/turkey/CappadociaBalloons.jpg",
  "/tabs/turkey/AntalyaOldTown.jpg",
  "/tabs/turkey/TakSimSquare.jpg",
];
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center gap-10 w-full">
    <img
      v-for="(image, index) in tabImages"
      :key="index"
      :src="image"
      class="object-cover transition duration-200 ease-in-out h-80 w-80 hover:scale-105 hover:shadow-2xl"
    />
  </div>
</template>
