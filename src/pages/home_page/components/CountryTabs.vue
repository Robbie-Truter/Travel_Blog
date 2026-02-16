<script setup lang="ts">
import ScrollFade from '@/components/ScrollFade.vue';
import CountryTabsSkeleton from '@/pages/home_page/components/CountryTabsSkeleton.vue';
import { useGetTabPosts } from '@/pages/home_page/composables/useGetTabPosts';
import type { TTabPosts } from '@/types/posts';
import { computed, ref, watch } from 'vue';

const { data: allTabCountries, isFetching: isCountryTabsLoading } = useGetTabPosts();

const currentTab = ref<string | null>(null);

const setActiveTab = (selectedTab: string) => {
  currentTab.value = selectedTab;
};

const isTabActive = (selectedTab: string) => currentTab.value === selectedTab;

const tabHeaders = computed(() => {
  if (!allTabCountries.value) return [];
  return [...new Set(allTabCountries.value.map((c) => c.country.country_name))];
});

const tabContent = computed(() => {
  if (!allTabCountries.value) return {};
  const grouped: Record<string, TTabPosts[]> = {};

  for (const tab of allTabCountries.value) {
    const country = tab.country.country_name;
    if (!grouped[country]) grouped[country] = [];
    grouped[country].push(tab);
  }

  return grouped;
});

watch(
  tabHeaders,
  (headers) => {
    if (headers.length && !currentTab.value) {
      currentTab.value = headers[0];
    }
  },
  { immediate: true }
);
</script>

<template>
  <!-- Countries loading -->
  <section
    v-if="isCountryTabsLoading"
    class="flex justify-center mt-12 mb-20 px-6 lg:px-20 xl:px-40"
  >
    <CountryTabsSkeleton />
  </section>

  <!-- Countries populated -->
  <section v-else-if="allTabCountries" class="px-6 lg:px-20 xl:px-40">
    <!-- Tabs -->
    <nav class="w-full mb-12 text-center" role="tablist">
      <h1 class="text-3xl font-bold tracking-tight mb-2">Top Destinations</h1>
      <p class="text-sm text-neutral-500 mb-8">
        Explore popular countries and their latest articles
      </p>

      <div class="flex flex-wrap justify-center gap-3">
        <span
          v-for="tab in tabHeaders"
          :key="tab"
          class="relative px-5 py-2 text-base font-medium rounded-full cursor-pointer transition-all duration-200"
          :class="
            isTabActive(tab)
              ? 'bg-[#EDB5BF]/20 text-[#EDB5BF]'
              : 'text-neutral-600 hover:text-[#EDB5BF]'
          "
          @click="setActiveTab(tab)"
        >
          {{ tab }}

          <span
            v-if="isTabActive(tab)"
            class="absolute left-1/2 -bottom-2 h-[3px] w-8 -translate-x-1/2 rounded-full bg-[#EDB5BF]"
          ></span>
        </span>
      </div>
    </nav>

    <!-- Tab Content -->
    <ScrollFade :viewport-amount="0.2">
      <Transition name="tab-fade" mode="out-in">
        <article
          v-if="currentTab && tabContent[currentTab]"
          :key="currentTab"
          class="flex flex-row flex-wrap justify-center gap-10 w-full"
        >
          <figure
            v-for="(image, index) in tabContent[currentTab]"
            :key="index"
            class="group flex flex-col items-center gap-4 cursor-pointer"
          >
            <img
              v-if="image.cover_image"
              :src="`http://localhost:8055/assets/${image.cover_image}?width=400&quality=80&format=webp`"
              :alt="image.article_title"
              class="h-80 w-80 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
            />

            <figcaption
              class="px-5 py-2 text-lg font-medium rounded-full bg-color-secondary transition-colors duration-200 group-hover:bg-color-primary group-hover:text-white cursor-pointer"
            >
              {{ image.article_title }}
            </figcaption>
          </figure>
        </article>
      </Transition>
    </ScrollFade>
  </section>
</template>

<style lang="css">
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: 0.3s ease-in-out;
  will-change: transform, opacity;
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  transform: translateY(12px);
  opacity: 0;
}
</style>
