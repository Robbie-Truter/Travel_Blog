<script setup lang="ts"></script>

<template>
  <header class="space-y-7 mb-20">
    <h1 class="text-xl sm:text-2xl md:text-[50px] text-center font-bold mt-20">
      Ready for the next side quest?
    </h1>

    <div
      class="w-2/3 lg:max-w-[900px] py-2 px-5 m-auto text-sm md:text-xl text-center rounded-xl sm:rounded-full bg-color-secondary"
    >
      <p>
        Join us as we explore new countries, sharing all the tips and tricks we wish we knew to make
        your travels easier!
      </p>
    </div>
  </header>

  <section class="mb-20 space-y-5">
    <div class="flex flex-col gap-2 m-auto w-4/5 md:max-w-[800px]">
      <input
        id="filterBlogs"
        type="text"
        placeholder="Search Blogs"
        class="w-full md:w-80 p-2 text-white rounded-full"
      />
      <div
        class="relative flex flex-wrap gap-5 justify-center h-auto py-4 px-8 text-sm md:text-xl text-center overflow-hidden rounded-xl sm:rounded-2xl bg-color-secondary"
      >
        <div
          class="w-20 p-2 text-center rounded-full cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-100"
        >
          <span>All</span>
        </div>

        <div
          class="space-x-0 lg:space-x-2 p-2 text-center rounded-full cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-100"
        >
          <span class="mr-2 text-sm">TR</span>
          <span>Türkiye</span>
        </div>

        <div
          class="space-x-0 lg:space-x-2 p-2 text-center rounded-full cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-100"
        >
          <span class="mr-2 text-sm">GE</span>
          <span>Georgia</span>
        </div>

        <div
          class="space-x-0 lg:space-x-2 p-2 text-center rounded-full cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-100"
        >
          <span class="mr-2 text-sm">CZ</span>
          <span>Czechia</span>
        </div>

        <div
          class="h-11 space-x-0 lg:space-x-2 p-2 text-center rounded-full cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-100"
        >
          <span class="mr-2 text-sm">GR</span>
          <span>Greece</span>
        </div>

        <div
          class="space-x-0 lg:space-x-2 p-2 text-center rounded-full cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-100"
        >
          <span class="mr-2 text-sm">GR</span>
          <span>Greece</span>
        </div>
        <div
          class="space-x-0 lg:space-x-2 p-2 text-center rounded-full cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-100"
        >
          <span class="mr-2 text-sm">GR</span>
          <span>Greece</span>
        </div>

        <!--<span
          class="absolute right-3 bottom-8 text-[14px] cursor-pointer tra hover:text-[16px] pi pi-arrow-circle-down"
        ></span>-->
      </div>
    </div>
  </section>
</template>
