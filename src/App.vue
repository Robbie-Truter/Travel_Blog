<script setup lang="ts">
import MainFooter from '@/components/MainFooter.vue';
import NavBarDesktop from '@/components/NavBarDesktop.vue';
import NavBarMobile from '@/components/NavBarMobile.vue';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import Toast from 'primevue/toast';
</script>

<template>
  <div class="hidden sm:block">
    <NavBarDesktop />
  </div>
  <div class="block sm:hidden">
    <NavBarMobile />
  </div>

  <Toast position="top-right" group="tr">
    <template #message="slotProps">
      <div class="flex flex-row items-center flex-auto gap-3 rounded-2xl p-3 px-4">
        <!-- Icon based on severity -->
        <span
          :class="{
            'pi pi-times-circle text-red-400': slotProps.message.severity == 'error',
            'pi pi-info-circle text-blue-400': slotProps.message.severity == 'info',
            'pi pi-check-circle text-green-400': slotProps.message.severity == 'success',
            'pi pi-exclamation-triangle text-yellow-400': slotProps.message.severity == 'warn',
          }"
          class="text-xl"
        ></span>
        <div class="flex flex-col items-start gap-0">
          <div class="font-bold text-sm text-white">{{ slotProps.message.summary }}</div>
          <div class="font-medium text-xs text-white/70">{{ slotProps.message.detail }}</div>
        </div>
      </div>
    </template>
  </Toast>

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

<!--Page transition animation and Global Toast Styling-->
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

/* Global Toast Styling */
.p-toast-message {
  background: rgba(24, 24, 27, 0.85) !important; /* Darker Zinc/Neutral shade */
  border: none !important;
  color: white !important;
  backdrop-filter: blur(12px) !important; /* More premium blur */
  -webkit-backdrop-filter: blur(12px) !important;
  border-radius: 1rem !important; /* rounded-2xl */
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1) !important;
  border-left: 4px solid !important;
  margin-bottom: 0.75rem !important;
}

/* Specific severity colors for the left border */
.p-toast-message-error {
  border-left-color: #f87171 !important; /* red-400 */
}
.p-toast-message-info {
  border-left-color: #60a5fa !important; /* blue-400 */
}
.p-toast-message-success {
  border-left-color: #4ade80 !important; /* green-400 */
}
.p-toast-message-warn {
  border-left-color: #fbbf24 !important; /* yellow-400 */
}

/* Hide PrimeVue's default icons if custom ones are used in template */
.p-toast-message-icon {
  display: none !important;
}

/* Custom message content padding adjustment */
.p-toast-message-content {
  padding: 0 !important;
}

/* Custom close button styling */
.p-toast-icon-close {
  color: white !important;
  opacity: 0.5;
  width: 1.5rem !important;
  height: 1.5rem !important;
}
.p-toast-icon-close:hover {
  opacity: 1;
}
</style>
