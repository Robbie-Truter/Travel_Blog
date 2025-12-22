<script setup lang="ts">
import MainFooter from '@/components/MainFooter.vue';
import NavBarDesktop from '@/components/NavBarDesktop.vue';
import NavBarMobile from '@/components/NavBarMobile.vue';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>

<template>
  <div class="hidden sm:block">
    <NavBarDesktop />
  </div>
  <div class="block sm:hidden">
    <NavBarMobile />
  </div>

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
.fade-enter-active {
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
}

.fade-leave-active {
  transition:
    opacity 0.15s ease-in,
    transform 0.15s ease-in;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
