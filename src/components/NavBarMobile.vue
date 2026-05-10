<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const isOpen = ref(false);

const route = useRoute();

const isActive = (path: string) => route.path === path;
</script>

<template>
  <BaseButton
    aria-label="toggle navigation bar"
    class="fixed top-4 left-3 z-1000 rounded-full bg-white/80 backdrop-blur-md shadow-lg"
    @click="isOpen = true"
  >
    <span class="pi pi-bars text-color-primary"></span>
  </BaseButton>

  <Drawer
    v-model:visible="isOpen"
    position="left"
    :modal="true"
    :dismissable="true"
    :show-close-icon="true"
    append-to="body"
    class="bg-white/90! backdrop-blur-lg"
  >
    <div class="flex flex-col gap-5 mt-5">
      <RouterLink to="/home">
        <BaseButton
          :custom-class="[
            'w-full rounded-md font-semibold !p-2 transition-colors duration-300',
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
            'w-full rounded-md font-semibold !p-2 transition-colors duration-300',
            isActive('/blogs') ? 'text-color-primary' : 'text-gray-600 hover:text-color-primary/80',
          ]"
        >
          <span class="pi pi-map mr-2"></span>
          Blogs
        </BaseButton>
      </RouterLink>

      <RouterLink to="/about-us">
        <BaseButton
          :custom-class="[
            'w-full rounded-md font-semibold !p-2 transition-colors duration-300',
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
            'w-full rounded-md font-semibold !p-2 transition-colors duration-300',
            isActive('/gallery')
              ? 'text-color-primary'
              : 'text-gray-600 hover:text-color-primary/80',
          ]"
        >
          <span class="pi pi-images mr-2"></span>
          Gallery
        </BaseButton>
      </RouterLink>
    </div>

    <div class="absolute bottom-4 left-8 flex items-center gap-4 text-gray-600">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span
          class="pi pi-instagram text-lg cursor-pointer hover:text-color-primary/80 transition-colors"
        ></span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span
          class="pi pi-facebook text-lg cursor-pointer hover:text-color-primary/80 transition-colors"
        ></span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span
          class="pi pi-pinterest text-lg cursor-pointer hover:text-color-primary/80 transition-colors"
        ></span>
      </a>
    </div>
  </Drawer>
</template>
