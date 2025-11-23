<script setup lang="ts">
const model = defineModel<string>({ default: '' });

defineProps<{
  id: string;
  type: 'text' | 'email';
  value?: string;
  placeholder?: string;
  label?: string;
  icon?: string;
  className?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="ml-[3px] text-color-secondary font-bold" :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="model"
      :name="id"
      :type="type"
      :placeholder="placeholder"
      :class="`${className} p-2 text-black rounded-xl`"
    />
  </div>
</template>
