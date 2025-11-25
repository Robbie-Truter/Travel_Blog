<script setup lang="ts">
// #NOTE: Move About Us to the right
// #NOTE: Create styling for active route

import BaseButton from '@/components/BaseButton.vue';
import 'primeicons/primeicons.css';
import { onMounted, onUnmounted, ref } from 'vue';

let isScrolledUp = ref<boolean>(true);

const handleScroll = () => {
  const thresholdUp = window.innerWidth < 1062 ? 200 : 100;
  const thresholdDown = window.innerWidth < 1062 ? 40 : 20;

  if (window.scrollY > thresholdUp) {
    if (isScrolledUp.value) isScrolledUp.value = false;
  }
  if (window.scrollY < thresholdDown) {
    if (!isScrolledUp.value) isScrolledUp.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    class="flex flex-col font-bold lg:flex-row justify-center lg:justify-start items-center h-auto lg:h-20 w-full z-10 gap-0 lg:gap-8 px-10 shadow-lg rounded bg-none text-black bg-transparent"
  >
    <h1 class="leckerli-one-regular text-[20px] lg:mr-10">Rob & Kija</h1>

    <RouterLink to="/home">
      <BaseButton custom-class="rounded-2xl hover:bg-[#EDB5BF]">
        <span class="pi pi-home mr-2"></span>
        Home
      </BaseButton>
    </RouterLink>

    <RouterLink to="/about-us">
      <BaseButton custom-class="rounded-2xl hover:bg-[#EDB5BF]">
        <span class="pi pi-heart-fill mr-2"></span>
        About Us
      </BaseButton>
    </RouterLink>

    <RouterLink to="/blogs">
      <BaseButton custom-class="rounded-2xl hover:bg-[#EDB5BF]">
        <span class="pi pi-camera mr-2"></span>
        Blogs
      </BaseButton>
    </RouterLink>

    <div
      class="absolute lg:relative flex justify-center items-center top-2 right-1 lg:top-0 lg:right-0 border lg:ml-auto w-9 h-9 p-1 transition ease-in-out duration-900 rounded-full bg-[#EDB5BF] border-black hover:rounded"
    >
      <span class="pi pi-instagram m-auto"></span>
    </div>
  </nav>

  <Transition name="navbar-fadeIn" mode="out-in">
    <nav
      v-if="!isScrolledUp"
      class="flex flex-col lg:flex-row justify-center lg:justify-start items-center h-auto lg:h-10 w-full fixed top-0 z-10 gap-0 lg:gap-4 px-10 shadow-lg rounded bg-white text-black bg-transparent"
    >
      <h1 class="leckerli-one-regular text-[15px] lg:mr-10">Rob & Kija</h1>

      <RouterLink to="/home">
        <BaseButton size="sm" custom-class="rounded-2xl hover:bg-[#EDB5BF]">
          <span class="pi pi-home mr-2"></span>
          Home
        </BaseButton>
      </RouterLink>

      <RouterLink to="/about-us">
        <BaseButton size="sm" custom-class="rounded-2xl hover:bg-[#EDB5BF]">
          <span class="pi pi-heart-fill mr-2"></span>
          About Us
        </BaseButton>
      </RouterLink>

      <RouterLink to="/blogs">
        <BaseButton size="sm" custom-class="rounded-2xl hover:bg-[#EDB5BF]">
          <span class="pi pi-camera mr-2"></span>
          Blogs
        </BaseButton>
      </RouterLink>

      <div
        class="absolute lg:relative flex justify-center items-center top-2 right-1 lg:top-0 lg:right-0 border lg:ml-auto w-6 transition ease-in-out duration-900 rounded-full bg-[#EDB5BF] border-black hover:rounded"
      >
        <button class="text-[11px] lg:text-[13px] mt-[1px]">
          <span class="pi pi-instagram m-auto"></span>
        </button>
      </div>
    </nav>
  </Transition>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Oswald:wght@200..700&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

.leckerli-one-regular {
  font-family: 'Leckerli One', cursive;
  font-weight: 400;
  font-style: normal;
}

.navbar-fadeIn-enter-active {
  transition: all 0.1s ease-out;
}

.navbar-fadeIn-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.navbar-fadeIn-enter-from,
.navbar-fadeIn-leave-to {
  transform: translateY(20px);
  opacity: 0;
  will-change: transform, opacity;
}
</style>
