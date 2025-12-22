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
    class="fixed top-4 left-3 z-1000 rounded-full bg-color-primary shadow-xl"
    @click="isOpen = true"
  >
    <span class="pi pi-bars"></span>
  </BaseButton>

  <Drawer
    v-model:visible="isOpen"
    position="left"
    :modal="true"
    :dismissable="true"
    :show-close-icon="true"
    append-to="body"
    class="bg-white!"
  >
    <div class="flex flex-col gap-5 mt-5">
      <RouterLink to="/home">
        <BaseButton
          :custom-class="[
            'w-full rounded-2xl hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
            isActive('/home') ? 'bg-color-primary text-white' : 'bg-transparent text-black',
          ]"
        >
          <span class="pi pi-home mr-2"></span>
          Home
        </BaseButton>
      </RouterLink>

      <RouterLink to="/blogs">
        <BaseButton
          :custom-class="[
            'w-full rounded-2xl hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
            isActive('/blogs') ? 'bg-color-primary text-white' : 'bg-transparent text-black',
          ]"
        >
          <span class="pi pi-camera mr-2"></span>
          Blogs
        </BaseButton>
      </RouterLink>

      <RouterLink to="/about-us">
        <BaseButton
          :custom-class="[
            'w-full rounded-2xl hover:bg-color-primary hover:text-white hover:opacity-[0.7]',
            isActive('/about-us') ? 'bg-color-primary text-white' : 'bg-transparent text-black',
          ]"
        >
          <span class="pi pi-heart-fill mr-2"></span>
          About Us
        </BaseButton>
      </RouterLink>
    </div>
  </Drawer>
</template>
