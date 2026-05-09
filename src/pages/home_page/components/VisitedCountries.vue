<script setup lang="ts">
import { useGetCountries } from '@/pages/home_page/composables/useGetCountries';
import 'flag-icons/css/flag-icons.min.css';
import { motion } from 'motion-v';

const { data: countries, isFetching } = useGetCountries();
</script>

<template>
  <section
    v-if="!isFetching && countries && countries.length > 0"
    class="flex flex-col gap-6 justify-center items-center w-full py-12"
  >
    <header class="flex flex-col items-center justify-center gap-5 text-center">
      <h3 class="text-3xl font-bold tracking-tight mb-2">Countries we've explored</h3>

      <span class="h-[3px] w-10 rounded-full bg-[#EDB5BF]" />
    </header>

    <!-- Infinite Slider Container -->
    <div
      class="slider-container bg-white/50 border border-neutral-100 shadow-sm w-[92%] rounded-2xl overflow-hidden py-4"
    >
      <motion.div
        class="flex w-max gap-16 px-8"
        :animate="{ x: ['0%', '-50%'] }"
        :transition="{
          duration: 300,
          repeat: Infinity,
          ease: 'linear',
        }"
      >
        <div v-for="n in 10" :key="n" class="flex items-center gap-16">
          <div
            v-for="(country, index) in countries"
            :key="`${country.id}-${index}-${n}`"
            class="flex items-center gap-4 transition-all duration-200 hover:opacity-80 hover:scale-115"
          >
            <!-- Flag -->
            <div
              class="shrink-0 h-8 w-11 overflow-hidden rounded shadow-sm border border-neutral-100"
            >
              <span
                v-if="country.country_iso"
                :class="`fi fi-${country.country_iso} block! w-full! h-full! bg-cover! bg-center!`"
              ></span>
              <span v-else class="text-2xl">{{ country.flag_emoji }}</span>
            </div>

            <span class="text-base font-semibold text-neutral-600 whitespace-nowrap">
              {{ country.country_name }}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
.slider-container {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>
