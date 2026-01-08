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
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.25s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
