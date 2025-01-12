<script setup lang="ts">
import { ref } from "vue";

type TTab = {
  tabHeaders: string[];
  tabContent?: string[];
};

const tabProps = defineProps<TTab>();
const currentTab = ref<string>(tabProps.tabHeaders[0] || "");

const setActiveTab = (selectedTab: string) => {
  currentTab.value = selectedTab;
};

const isTabActive = (selectedTab: string) => {
  return currentTab.value === selectedTab;
};
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
  <Transition name="tab-fade">
    <slot :name="currentTab.replace(/\s+/g, '-')"></slot>
  </Transition>
</template>

<style lang="css">
.tab-fade-enter-active {
  transition: 0.4s ease-out;
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  transform: translateY(60%);
  opacity: 0;
}
</style>
