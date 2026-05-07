<template>
  <div class="animate-pulse">
    <!-- Header Skeleton -->
    <header class="relative mb-20 flex h-[55vh] w-full items-center justify-center bg-gray-200/80">
      <div class="flex flex-col items-center gap-6">
        <!-- Metadata Pills -->
        <div class="flex items-center justify-center gap-3">
          <div class="h-9 w-28 rounded-full bg-gray-300/50"></div>
          <div class="h-9 w-28 rounded-full bg-gray-300/50"></div>
        </div>
        <!-- Title -->
        <div class="h-10 w-96 max-w-[80%] rounded-full bg-gray-300/50"></div>
        <div class="h-10 w-72 max-w-[60%] rounded-full bg-gray-300/50"></div>
        <!-- Date -->
        <div class="mt-2 h-5 w-48 rounded-full bg-gray-300/50"></div>
      </div>
    </header>

    <!-- Content Skeleton -->
    <section class="mx-auto my-20 max-w-4xl space-y-6">
      <div v-for="i in 3" :key="i" class="space-y-4">
        <div class="h-5 w-3/4 rounded-full bg-gray-200/80"></div>
        <div class="h-5 w-full rounded-full bg-gray-200/80"></div>
        <div class="h-5 w-5/6 rounded-full bg-gray-200/80"></div>
      </div>
      <div class="space-y-4 pt-8">
        <div class="h-48 w-full rounded-2xl bg-gray-200/80"></div>
      </div>
      <div v-for="i in 2" :key="i" class="space-y-4 pt-4">
        <div class="h-5 w-full rounded-full bg-gray-200/80"></div>
        <div class="h-5 w-5/6 rounded-full bg-gray-200/80"></div>
      </div>
    </section>
  </div>
</template>
