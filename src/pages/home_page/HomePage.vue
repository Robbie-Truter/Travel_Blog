<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import ScrollFade from '@/components/ScrollFade.vue';
import CountryTabs from '@/pages/home_page/components/CountryTabs.vue';
import LatestPosts from '@/pages/home_page/components/LatestPosts.vue';
import 'primeicons/primeicons.css';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="space-y-40">
    <!-- Header section -->
    <header class="relative h-screen w-full overflow-hidden">
      <img
        alt="Header Image"
        src="@/assets/HeaderImg.jpg"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div class="absolute inset-0 bg-linear-to-b from-black/10 via-black/10 to-black/10"></div>

      <div
        class="relative z-10 flex flex-col items-center gap-5 px-6 text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <h1 class="tracking-wide opacity-90">Hi, we’re</h1>

        <h2 class="font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight">Robert & Kija</h2>

        <div class="mt-2 max-w-xl rounded-xl bg-[#ebf0f2]/85 p-4 sm:p-6 shadow-xl text-[#5b5a4f]">
          <p class="text-sm sm:text-lg leading-relaxed">
            Slow travel is our favorite way of exploring the world. We share inspiring travel blogs
            and practical tips to show that planning doesn’t have to feel overwhelming.
          </p>
        </div>
      </div>
    </header>

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
</style>
