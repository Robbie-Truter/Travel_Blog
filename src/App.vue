<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import NavBar from '@/components/NavBar.vue';
import MainFooter from '@/components/MainFooter.vue';
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
    <MainFooter />
  </main>
  <VueQueryDevtools />
</template>
