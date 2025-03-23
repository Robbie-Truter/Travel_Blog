<script setup lang="ts">
import Tab from "./ui/Tab.vue";
import TurkeyTab from "./tabs/TurkeyTab.vue";
import GeorgiaTab from "./tabs/GeorgiaTab.vue";
import SouthAfricaTab from "./tabs/SouthAfricaTab.vue";
import "primeicons/primeicons.css";

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
  <header class="relative">
    <img
      alt="Header Image"
      src="../assets/HeaderImg.jpg"
      class="w-full h-auto max-h-[700px] object-cover brightness-90"
    />
    <div
      class="flex flex-col gap-4 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
    >
      <h1 class="text-sm lg:text-4xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Hi we're</h1>
      <h2 class="font-bold text-md lg:text-6xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        Robert & Kija
      </h2>
      <div class="p-1 lg:p-4 rounded-lg text-center shadow-lg text-[#5b5a4f] bg-[#ebf0f2]">
        <p class="text-[12px] lg:text-2xl">
          Slow travel is is our favorite way of traveling. We share inspiring travel blogs and tips
          to show you that planning doesn't have to be overwhelming
        </p>
      </div>
    </div>
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

    <figure class="self-center relative">
      <img
        src="/articles/headings/KaleichiOldTown.jpg"
        class="h-[20rem] lg:h-[30rem] w-[35rem] rounded-xl object-cover brightness-[.7]"
      />
      <figcaption
        class="absolute top-5 left-5 p-3 text-xl rounded-full transition duration-100 ease-in-out cursor-pointer bg-color-primary text-white"
      >
        Latest Post
      </figcaption>
      <figcaption class="absolute top-20 left-7 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        Best locations to stay when <br />
        visiting Antalya
      </figcaption>
    </figure>
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

  <section class="flex items-center justify-center h-96 mb-20">
    <div class="relative h-72 w-full lg:w-2/3 rounded-xl overflow-visible bg-[#99bfd7]">
      <div
        class="flex flex-row justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <div
          class="flex flex-col gap-6 items-center text-center min-h-72 min-md:h-80 lg:h-96 w-72 lg:w-80 z-20 p-5 bg-[#ebf0f2]"
        >
          <h2 class="text-2xl font-bold leading-10">
            Welcome, we're Robert and
            <span class="p-2 rounded-full text-white bg-color-primary">Kija!</span>
          </h2>

          <p>
            We're both in our early 20's and working in tech fulltime, we try to travel as much as
            possible while balancing our careers.
          </p>

          <p>We love slow travel and focus on inspiring the ordinary to make travel a priority</p>
          <div class="space-x-2">
            <span class="pi pi-facebook cursor-pointer"></span>
            <span class="pi pi-instagram cursor-pointer"></span>
          </div>
        </div>

        <img
          src="/footer/CampsBay.jpg"
          class="footerImg hidden sm:inline scale-[0.7] sm:scale-[1.1] lg:scale-[1.3] w-96 ml-[-30px] z-10"
        />
      </div>
    </div>
  </section>
</template>

<style lang="css">
.footerImg {
  -webkit-mask: url(https://i.ibb.co/mBrmH0k/Mf15d.png) center/contain no-repeat;
}
</style>
