<script setup lang="ts">
import Paginator from 'primevue/paginator';

// --- Props ---
defineProps<{
  dataLength: number;
}>();

/// --- Emits ---
defineEmits(['onPageChange']);
</script>

<template>
  <Paginator
    :always-show="false"
    :rows="5"
    :total-records="dataLength"
    class="text-white"
    template="PrevPageLink PageLinks NextPageLink "
    :pt="{
      root: { class: 'flex gap-4 items-center' },
      pages: { class: 'space-x-2' },
      page: ({ context }) => ({
        class: [
          'px-2 rounded-full cursor-pointer select-none font-medium',
          context.active
            ? 'bg-color-primary text-black'
            : 'bg-color-secondary text-black hover:opacity-[0.8]',
        ],
      }),
      prev: {
        class: 'px-2 cursor-pointer',
      },
      next: {
        class: 'px-2 cursor-pointer',
      },
    }"
    @page="(e) => $emit('onPageChange', e)"
  />
</template>
