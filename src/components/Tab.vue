<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { getAllCountries } from "@/util/services/countries/getAllCountries";

const allCountries = ref<string[]>([]);
const currentTab = ref<string | null>(null);

const setActiveTab = (selectedTab: string) => {
  currentTab.value = selectedTab;
};

const isTabActive = (selectedTab: string) => {
  return currentTab.value === selectedTab;
};

onMounted(async () => {
  const allCountriesResponse = await getAllCountries();
  allCountries.value = allCountriesResponse?.map((country) => country.country_name) || [];
  currentTab.value = allCountries.value[0];
});

const tabHeaders = computed(() => {
  return allCountries.value.map((country) => country);
});
</script>

<template>
  <figure class="w-full mb-5">
    <figcaption class="flex flex-row flex-wrap gap-7 justify-center w-full text-2xl">
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
    </figcaption>
    <hr class="w-full border-[3px] border-[#EDB5BF]" />
  </figure>
  <Transition name="tab-fade" mode="out-in">
    <slot :name="currentTab?.replace(/\s+/g, '-')"></slot>
  </Transition>
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
