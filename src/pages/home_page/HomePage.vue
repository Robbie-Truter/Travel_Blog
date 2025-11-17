<script setup lang="ts">
import ScrollFade from '@/components/ScrollFade.vue';
import CountryTabs from '@/pages/home_page/components/CountryTabs.vue';
import LatestPosts from '@/pages/home_page/components/LatestPosts.vue';
import 'primeicons/primeicons.css';
</script>

<template>
  <div>
    <header class="relative">
      <img
        alt="Header Image"
        src="@/assets/HeaderImg.jpg"
        class="w-full h-[100vh] object-cover brightness-90"
      />
      <div
        class="flex flex-col gap-4 items-center absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
      >
        <h1 class="text-sm lg:text-4xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Hi we're</h1>
        <h2 class="font-bold text-md lg:text-6xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Robert & Kija
        </h2>
        <div class="p-1 lg:p-4 rounded-lg text-center shadow-lg text-[#5b5a4f] bg-[#ebf0f2]">
          <p class="text-[12px] lg:text-2xl">
            Slow travel is is our favorite way of traveling. We share inspiring travel blogs and
            tips to show you that planning doesn't have to be overwhelming
          </p>
        </div>
      </div>
    </header>

    <ScrollFade>
      <LatestPosts />
    </ScrollFade>

    <ScrollFade>
      <CountryTabs />
    </ScrollFade>

    <section class="mb-20">
      <ScrollFade class="flex items-center justify-center h-96">
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
                We're both in our early 20's and working in tech fulltime, we try to travel as much
                as possible while balancing our careers.
              </p>

              <p>
                We love slow travel and focus on inspiring the ordinary to make travel a priority
              </p>
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
      </ScrollFade>
    </section>
  </div>
</template>

<style lang="css">
.footerImg {
  -webkit-mask: url(https://i.ibb.co/mBrmH0k/Mf15d.png) center/contain no-repeat;
}
</style>
