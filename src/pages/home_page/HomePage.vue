<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import ScrollFade from '@/components/ScrollFade.vue';
import CountryTabs from '@/pages/home_page/components/CountryTabs.vue';
import LatestPosts from '@/pages/home_page/components/LatestPosts.vue';
import 'primeicons/primeicons.css';
import Carousel from 'primevue/carousel';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const headerImages = ref([
  {
    id: '1',
    title: 'Robert & Kija',
    subtitle: 'Slow travel, real stories',
    summary:
      'Slow travel is our favorite way of exploring the world. We share inspiring travel blogs and practical tips to show that planning doesn’t have to feel overwhelming.',
    image: new URL('@/assets/HeaderImg.jpg', import.meta.url).href,
  },
  {
    id: '2',
    title: 'Discover Together',
    subtitle: 'Moments from around the world',
    summary:
      'From cobbled old towns to quiet coastal escapes, we capture the moments that make traveling together meaningful and memorable.',
    image: new URL('@/assets/CeskyKrumlov.jpg', import.meta.url).href,
  },
  {
    id: '3',
    title: 'Travel Slowly',
    subtitle: 'Less rushing, more living',
    summary:
      'We believe travel is about depth, not distance. Staying longer, moving slower, and creating space for real experiences.',
    image: new URL('@/assets/Brasov.jpg', import.meta.url).href,
  },
]);
</script>

<template>
  <div class="space-y-40">
    <!-- Header Section Carousal -->
    <Carousel
      :value="headerImages"
      :num-visible="1"
      :num-scroll="1"
      circular
      :autoplay-interval="7000"
      :show-indicators="false"
      :show-navigators="false"
      class="hero-carousel"
    >
      <template #item="slotProps">
        <section class="hero-slide">
          <img :src="slotProps.data.image" :alt="slotProps.data.title" class="hero-image" />

          <div class="hero-overlay"></div>

          <div class="hero-content">
            <h1 class="tracking-wide opacity-90">
              {{ slotProps.data.subtitle }}
            </h1>

            <h2 class="font-bold text-3xl sm:text-5xl lg:text-6xl">
              {{ slotProps.data.title }}
            </h2>

            <div class="hero-card">
              <p>
                {{ slotProps.data.summary }}
              </p>
            </div>
          </div>
        </section>
      </template>
    </Carousel>

    <!-- Featured posts -->
    <ScrollFade>
      <LatestPosts />
    </ScrollFade>

    <!-- Top destination (countries)-->
    <ScrollFade>
      <CountryTabs />
    </ScrollFade>

    <!-- About us summary -->
    <ScrollFade>
      <section class="px-6 lg:px-20 xl:px-40">
        <header class="mb-12 flex flex-col gap-4 justify-center items-center">
          <h1 class="text-3xl font-bold tracking-tight mb-2">About Us</h1>

          <p class="text-sm text-neutral-500">A little more about the people behind the journey</p>

          <BaseButton
            custom-class="p-3 font-bold bg-color-primary rounded-full"
            size="sm"
            @click="router.push('/about-us')"
          >
            Read Our Story
          </BaseButton>

          <div class="flex justify-center">
            <span class="h-[3px] w-10 rounded-full bg-[#EDB5BF]" />
          </div>
        </header>

        <div class="flex justify-center">
          <div
            class="relative w-full lg:w-2/3 rounded-xl bg-linear-to-t from-[#99bfd7] to-indigo-400 p-6 lg:p-10"
          >
            <div class="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div
                class="flex flex-col gap-6 items-center text-center w-72 lg:w-80 p-6 bg-[#ebf0f2] rounded-xl shadow-lg z-10"
              >
                <h2 class="text-2xl font-bold leading-snug">
                  Welcome, we're Robert and
                  <span class="inline-block px-3 py-1 rounded-full text-white bg-color-primary">
                    Kija!
                  </span>
                </h2>

                <p class="text-sm text-neutral-700 leading-relaxed">
                  We're both in our early 20's and working in tech full-time, traveling as much as
                  possible while balancing our career.
                </p>

                <p class="text-sm leading-relaxed text-neutral-700">
                  We love slow travel and focus on inspiring the ordinary to make travel a priority.
                </p>

                <div class="flex gap-3 text-xl text-neutral-700">
                  <span class="pi pi-facebook cursor-pointer hover:text-color-primary" />
                  <span class="pi pi-instagram cursor-pointer hover:text-color-primary" />
                </div>
              </div>

              <img
                src="/footer/CampsBay.jpg"
                alt="Camps Bay"
                class="hidden sm:block w-80 lg:w-96 rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollFade>
  </div>
</template>

<style lang="css">
.footerImg {
  -webkit-mask: url(https://i.ibb.co/mBrmH0k/Mf15d.png) center/contain no-repeat;
}

.hero-carousel {
  width: 100vw;
  margin-left: calc(50% - 50vw); /* breaks out of page container */
}

.hero-carousel .p-carousel-item {
  width: 100vw !important;
}

.hero-slide {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 1.5rem;
  text-align: center;
  color: white;
}

.hero-card {
  max-width: 42rem;
  background: rgba(235, 240, 242, 0.85);
  color: #5b5a4f;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
</style>
