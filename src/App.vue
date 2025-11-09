<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import NavBar from '@/components/NavBar.vue';
import MainFooter from '@/components/MainFooter.vue';
</script>

<template>
  <NavBar />
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <MainFooter />
  </main>
  <VueQueryDevtools />
</template>

<!--Page transition animation-->
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
