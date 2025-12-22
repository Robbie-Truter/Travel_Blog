<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import 'primeicons/primeicons.css';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let isScrolledUp = ref<boolean>(true);
const route = useRoute();

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

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

const isActive = (path: string) => route.path === path;
</script>

<template>
  <nav
    class="flex flex-row justify-between items-center h-20 w-full z-10 gap-8 px-10 shadow-md rounded bg-white text-black"
  >
    <div class="flex items-center gap-6">
      <h1 class="leckerli-one-regular text-[20px] lg:mr-4">Rob & Kija</h1>

      <RouterLink to="/home">
        <BaseButton
          :custom-class="[
            'rounded-2xl hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
            isActive('/home') ? 'bg-color-primary text-white' : '',
          ]"
        >
          <span class="pi pi-home mr-2"></span>
          Home
        </BaseButton>
      </RouterLink>

      <RouterLink to="/blogs">
        <BaseButton
          :custom-class="[
            'rounded-2xl hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
            isActive('/blogs') ? 'bg-color-primary text-white' : '',
          ]"
        >
          <span class="pi pi-camera mr-2"></span>
          Blogs
        </BaseButton>
      </RouterLink>
    </div>

    <div class="flex items-center gap-6">
      <RouterLink to="/about-us">
        <BaseButton
          :custom-class="[
            'rounded-2xl hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
            isActive('/about-us') ? 'bg-color-primary text-white' : '',
          ]"
        >
          <span class="pi pi-heart-fill mr-2"></span>
          About Us
        </BaseButton>
      </RouterLink>

      <div
        class="flex justify-center items-center w-9 h-9 p-1 rounded-full bg-[#EDB5BF] border border-black"
      >
        <span class="pi pi-instagram text-base"></span>
      </div>
    </div>
  </nav>

  <Transition name="navbar-fadeIn" mode="out-in">
    <nav
      v-if="!isScrolledUp"
      class="flex flex-row justify-between items-center h-14 w-full fixed top-0 left-0 right-0 px-10 shadow-md bg-white z-50 gap-4"
    >
      <div class="flex items-center gap-4">
        <h1 class="leckerli-one-regular text-[15px] lg:mr-4">Rob & Kija</h1>

        <RouterLink to="/home">
          <BaseButton
            size="sm"
            :custom-class="[
              'rounded-lg hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
              isActive('/home') ? 'bg-color-primary text-white' : '',
            ]"
          >
            <span class="pi pi-home mr-2"></span>
            Home
          </BaseButton>
        </RouterLink>

        <RouterLink to="/blogs">
          <BaseButton
            size="sm"
            :custom-class="[
              'rounded-lg hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
              isActive('/blogs') ? 'bg-color-primary text-white' : '',
            ]"
          >
            <span class="pi pi-camera mr-2"></span>
            Blogs
          </BaseButton>
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">
        <RouterLink to="/about-us">
          <BaseButton
            size="sm"
            :custom-class="[
              'rounded-lg hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
              isActive('/about-us') ? 'bg-color-primary text-white' : '',
            ]"
          >
            <span class="pi pi-heart-fill mr-2"></span>
            About Us
          </BaseButton>
        </RouterLink>

        <div
          class="flex justify-center items-center w-8 h-8 rounded-full bg-[#EDB5BF] border border-black"
        >
          <span class="pi pi-instagram text-sm"></span>
        </div>
      </div>
    </nav>
  </Transition>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');

.leckerli-one-regular {
  font-family: 'Leckerli One', cursive;
  font-weight: 400;
  font-style: normal;
}

.navbar-fadeIn-enter-active,
.navbar-fadeIn-leave-active {
  transition: all 0.1s ease-out;
}

.navbar-fadeIn-enter-from,
.navbar-fadeIn-leave-to {
  transform: translateY(20px);
  opacity: 0;
  will-change: transform, opacity;
}
</style>
