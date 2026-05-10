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
  <!-- Navbar before scrolling -->
  <nav
    class="flex flex-row justify-between items-center h-20 w-full z-10 gap-8 px-10 shadow-sm bg-white/95 text-black"
  >
    <div class="flex items-center gap-6">
      <h1 class="leckerli-one-regular text-[20px] lg:mr-4">Rob & Kija</h1>

      <RouterLink to="/home">
        <BaseButton
          :custom-class="[
            'rounded-md font-semibold !p-2 transition-colors duration-300',
            isActive('/home') ? 'text-color-primary' : 'text-gray-600 hover:text-color-primary/80',
          ]"
        >
          <span class="pi pi-compass mr-2"></span>
          Home
        </BaseButton>
      </RouterLink>

      <RouterLink to="/blogs">
        <BaseButton
          :custom-class="[
            'rounded-md font-semibold !p-2 transition-colors duration-300',
            isActive('/blogs') ? 'text-color-primary' : 'text-gray-600 hover:text-color-primary/80',
          ]"
        >
          <span class="pi pi-map mr-2"></span>
          Blogs
        </BaseButton>
      </RouterLink>
    </div>

    <div class="flex items-center gap-6">
      <RouterLink to="/about-us">
        <BaseButton
          :custom-class="[
            'rounded-md font-semibold !p-2 transition-colors duration-300',
            isActive('/about-us')
              ? 'text-color-primary'
              : 'text-gray-600 hover:text-color-primary/80',
          ]"
        >
          <span class="pi pi-heart-fill mr-2"></span>
          About Us
        </BaseButton>
      </RouterLink>

      <RouterLink to="/gallery">
        <BaseButton
          :custom-class="[
            'rounded-md font-semibold !p-2 transition-colors duration-300',
            isActive('/gallery')
              ? 'text-color-primary'
              : 'text-gray-600 hover:text-color-primary/80',
          ]"
        >
          <span class="pi pi-images mr-2"></span>
          Gallery
        </BaseButton>
      </RouterLink>

      <div class="flex items-center gap-4 text-gray-600">
        <span
          class="pi pi-instagram text-lg cursor-pointer hover:text-color-primary/80 transition-colors"
        ></span>
        <span
          class="pi pi-facebook text-lg cursor-pointer hover:text-color-primary/80 transition-colors"
        ></span>
        <span
          class="pi pi-pinterest text-lg cursor-pointer hover:text-color-primary/80 transition-colors"
        ></span>
      </div>
    </div>
  </nav>

  <!-- Navbar after scrolling -->
  <Transition name="navbar-fadeIn" mode="out-in">
    <nav
      v-if="!isScrolledUp"
      class="flex flex-row justify-between items-center h-14 w-full fixed top-0 left-0 right-0 px-10 shadow-md bg-white/80 backdrop-blur-md z-50 gap-4"
    >
      <div class="flex items-center gap-4">
        <h1 class="leckerli-one-regular text-[15px] lg:mr-4">Rob & Kija</h1>

        <RouterLink to="/home">
          <BaseButton
            size="sm"
            :custom-class="[
              'rounded-md font-semibold !p-2 transition-colors duration-300',
              isActive('/home')
                ? 'text-color-primary'
                : 'text-gray-600 hover:text-color-primary/80',
            ]"
          >
            <span class="pi pi-compass mr-2"></span>
            Home
          </BaseButton>
        </RouterLink>

        <RouterLink to="/blogs">
          <BaseButton
            size="sm"
            :custom-class="[
              'rounded-md font-semibold !p-2 transition-colors duration-300',
              isActive('/blogs')
                ? 'text-color-primary'
                : 'text-gray-600 hover:text-color-primary/80',
            ]"
          >
            <span class="pi pi-map mr-2"></span>
            Blogs
          </BaseButton>
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">
        <RouterLink to="/about-us">
          <BaseButton
            size="sm"
            :custom-class="[
              'rounded-md font-semibold !p-2 transition-colors duration-300',
              isActive('/about-us')
                ? 'text-color-primary'
                : 'text-gray-600 hover:text-color-primary/80',
            ]"
          >
            <span class="pi pi-heart-fill mr-2"></span>
            About Us
          </BaseButton>
        </RouterLink>

        <RouterLink to="/gallery">
          <BaseButton
            size="sm"
            :custom-class="[
              'rounded-md font-semibold !p-2 transition-colors duration-300',
              isActive('/gallery')
                ? 'text-color-primary'
                : 'text-gray-600 hover:text-color-primary/80',
            ]"
          >
            <span class="pi pi-images mr-2"></span>
            Gallery
          </BaseButton>
        </RouterLink>

        <div class="flex items-center gap-4 text-gray-600">
          <span
            class="pi pi-instagram text-base cursor-pointer hover:text-color-primary/80 transition-colors"
          ></span>
          <span
            class="pi pi-facebook text-base cursor-pointer hover:text-color-primary/80 transition-colors"
          ></span>
          <span
            class="pi pi-pinterest text-base cursor-pointer hover:text-color-primary/80 transition-colors"
          ></span>
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
