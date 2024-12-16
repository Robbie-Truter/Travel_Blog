<script setup lang="ts">
const locationImageScroll: string[] = [
  "GreeceStockImage.jpg",
  "GreeceStockImage.jpg",
  "GreeceStockImage.jpg",
  "GreeceStockImage.jpg",
];

const articleScroll: string[] = [
  "Best locations to stay when visiting Antalya",
  "How to get from Antalya to Kas via public transport",
  "How to navigate Tbilisi, Georgia",
  "Laos travel guide: complete 10 day itinerary",
];
</script>

<template>
  <header>
    <img alt="Header Image" src="../assets/kasBoat.jpg" class="w-full h-auto max-h-[800px]" />
  </header>

  <section
    class="flex flex-col lg:flex-row justify-center gap-6 lg:gap-3 w-full lg:h-[420px] mt-10 px-2 lg:px-20 xl:px-40 font-bold text-lg mb-20"
  >
    <article class="flex flex-col gap-2 w-full 2xl:w-auto">
      <figure v-for="(article, index) in articleScroll" :key="index">
        <aside class="flex flex-row justify-start items-center gap-4">
          <div class="h-20 min-w-28 border border-black rounded"></div>
          <p>{{ article }}</p>
        </aside>
        <hr v-if="articleScroll[index + 1]" class="w-full my-3" />
      </figure>
    </article>

    <article class="flex flex-row justify-evenly gap-1 w-full 2xl:w-auto overflow-x-auto scrollbar">
      <img
        v-for="(image, index) in locationImageScroll"
        :key="index"
        alt="Article Image"
        :src="`../public/${image}`"
        class="h-full w-72 rounded-md transition duration-200 ease-in-out border-black z-10 cursor-pointer hover:scale-x-110 hover:shadow-xl hover:z-20 hover:border"
      />
    </article>
  </section>
</template>
