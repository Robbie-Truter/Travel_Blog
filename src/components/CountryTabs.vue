<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { getTabPostsByCountry } from "@/util/services/posts/getTabPostsByCountry";

const allTabCountries = ref<any[]>([]);
const currentTab = ref<string | null>(null);

const setActiveTab = (selectedTab: string) => {
  currentTab.value = selectedTab;
};

const isTabActive = (selectedTab: string) => {
  return currentTab.value === selectedTab;
};

onMounted(async () => {
  const allTabPosts = await getTabPostsByCountry();
  allTabCountries.value = allTabPosts;
  currentTab.value = tabHeaders.value[0];
});

const tabHeaders = computed(() => {
  //remove duplicates
  const uniqueCountries = [
    ...new Set(allTabCountries.value.map((country) => country.country.country_name)),
  ];
  return uniqueCountries.map((country) => country);
});

const tabContent = computed(() => {
  //group tab content by country
  const groupedTabsByCountry = {};

  for (const tab of allTabCountries.value) {
    const country = tab.country.country_name;
    if (!groupedTabsByCountry[country]) {
      groupedTabsByCountry[country] = [];
    }
    groupedTabsByCountry[country].push(tab);
  }

  return groupedTabsByCountry;
});
</script>

<template>
  <section class="mb-20">
    <nav class="w-full mb-5" role="tablist">
      <div class="flex flex-row flex-wrap gap-7 justify-center w-full text-2xl">
        <span
          v-for="tab in tabHeaders"
          :key="tab"
          @click="setActiveTab(tab)"
          :class="`${
            isTabActive(tab) && 'bg-[#EDB5BF] text-white'
          } min-w-36 text-center p-2 transition ease-in-out duration-200 cursor-pointer hover:text-white hover:bg-[#EDB5BF]`"
        >
          {{ tab }}
        </span>
      </div>
      <hr class="w-full border-[3px] border-[#EDB5BF]" />
    </nav>

    <Transition name="tab-fade" mode="out-in">
      <article
        v-if="currentTab && tabContent[currentTab]"
        :key="currentTab"
        class="flex flex-row flex-wrap justify-center gap-10 w-full"
      >
        <figure
          v-for="(image, index) in tabContent[currentTab]"
          :key="index"
          class="flex flex-col gap-10 items-center"
        >
          <img
            v-if="image.cover_image"
            :src="`http://localhost:8055/assets/${image.cover_image}?width=400&quality=80&format=webp`"
            :alt="image.article_title"
            class="object-cover transition duration-200 ease-in-out h-80 w-80 rounded-lg hover:scale-105 hover:shadow-2xl"
          />
          <figcaption
            class="p-3 text-xl rounded-full transition duration-100 ease-in-out cursor-pointer bg-color-secondary hover:bg-color-primary hover:text-white"
          >
            {{ image.article_title }}
          </figcaption>
        </figure>
      </article>
    </Transition>
  </section>
</template>

<style lang="css">
.tab-fade-enter-active {
  transition: 0.3s ease-in-out;
  will-change: transform, opacity;
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  transform: translateY(30%);
  opacity: 0;
}
</style>
