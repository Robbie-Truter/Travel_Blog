<script setup lang="ts">
import Tab from "./ui/Tab.vue";
import TurkeyTab from "./tabs/TurkeyTab.vue";
import GeorgiaTab from "./tabs/GeorgiaTab.vue";
import SouthAfricaTab from "./tabs/SouthAfricaTab.vue";

const locationImages: string[] = [
  "/articles/slider/TbilisiChurch.jpg",
  "/articles/slider/Kalekoy.jpg",
  "/articles/slider/Aspendos.jpg",
  "/articles/slider/GreeceStockImage.jpg",
];

const articleHeadings = [
  {
    path: "/articles/headings/KaleichiOldTown.jpg",
    description: "Best locations to stay when visiting Antalya",
  },
  {
    path: "/tabs/turkey/KasTownMonument.jpg",
    description: "How to get from Antalya to Kas via public transport",
  },
  {
    path: "/articles/headings/Khinkali.jpg",
    description: "Dive into georgian cuisine in Tbilisi",
  },
  {
    path: "/articles/headings/AdalarsBeach.jpg",
    description: "Best beach spots near Antalaya's old town",
  },
];
</script>

<template>
  <header>
    <img alt="Header Image" src="../assets/HeaderImg.jpg" class="w-full h-auto max-h-[800px]" />
  </header>

  <section
    class="flex flex-col lg:flex-row justify-center gap-6 w-full mt-10 px-2 lg:px-20 xl:px-40 font-bold text-lg mb-20"
  >
    <article class="flex flex-col gap-2 w-full 2xl:w-auto">
      <figure
        v-for="(heading, index) in articleHeadings"
        :key="index"
        class="rounded cursor-pointer"
      >
        <aside
          class="flex flex-row justify-start items-center gap-4 transition ease-in-out duration-100 hover:bg-gray-100 hover:shadow-md"
        >
          <img :src="heading.path" class="h-28 min-w-28 rounded-2xl object-cover" />
          <p class="text-wrap">{{ heading.description }}</p>
        </aside>
        <hr v-if="articleHeadings[index + 1]" class="w-full my-3" />
      </figure>
    </article>

    <article
      class="flex flex-row justify-evenly lg:self-center gap-1 h-[420px] w-full 2xl:w-auto overflow-x-auto scrollbar"
    >
      <div v-for="(image, index) in locationImages" :key="index" class="relative group">
        <img
          alt="Article Image"
          :src="image"
          class="h-full min-w-72 rounded-md border-black transition-opacity ease-in-out duration-500 cursor-pointer group-hover:opacity-40"
        />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100"
        >
          <span
            class="rounded-lg text-sm cursor-pointer font-bold p-6 bg-[#EDB5BF] group-hover:shadow-lg"
            >Test Text</span
          >
        </div>
      </div>
    </article>
  </section>

  <section class="mb-20">
    <Tab :tab-headers="['Türkiye', 'Georgia', 'South Africa']">
      <template v-slot:Türkiye>
        <TurkeyTab />
      </template>

      <template v-slot:Georgia>
        <GeorgiaTab />
      </template>

      <template v-slot:South-Africa>
        <SouthAfricaTab />
      </template>
    </Tab>
  </section>
</template>
