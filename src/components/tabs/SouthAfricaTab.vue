<script setup lang="ts">
type TTabImages = {
  path: string;
  name: string;
};

const tabImages: TTabImages[] = [
  {
    path: "/tabs/south-africa/Clifton.jpg",
    name: "Cape Town",
  },
  {
    path: "/tabs/south-africa/Paarl.jpg",
    name: "Paarl",
  },
];
</script>

<template>
  <article class="flex flex-row flex-wrap justify-center gap-10 w-full">
    <figure
      v-for="(image, index) in tabImages"
      :key="index"
      class="flex flex-col gap-10 items-center"
    >
      <img
        :src="image.path"
        class="object-cover transition duration-200 ease-in-out h-80 w-80 hover:scale-105 hover:shadow-2xl"
      />
      <figcaption
        class="p-3 text-xl rounded-full transition duration-100 ease-in-out cursor-pointer bg-color-secondary hover:bg-color-primary hover:text-white"
      >
        {{ image.name }}
      </figcaption>
    </figure>
  </article>
</template>
