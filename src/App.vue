<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
    <MainFooter />
  </main>
</template>
