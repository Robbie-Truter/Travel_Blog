<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { motion } from 'motion-v';
</script>

<template>
  <section class="relative overflow-hidden bg-[#121212] py-24 text-white">
    <!-- Decorative background blur -->
    <div
      class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-color-primary/10 blur-[120px]"
    ></div>
    <div
      class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]"
    ></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-12">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <!-- Text Content -->
        <motion.div
          :initial="{ opacity: 0, x: -50 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.8 }"
          class="space-y-8"
        >
          <div
            class="inline-flex items-center gap-2 rounded-full bg-color-primary/20 px-4 py-1 text-sm font-bold text-color-primary"
          >
            <i class="pi pi-sparkles"></i>
            <span>The Ultimate Travel Tool</span>
          </div>

          <h2 class="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Meet <span class="text-color-primary">Wanderplan</span>.
          </h2>

          <p class="text-lg leading-relaxed text-neutral-400">
            We built the ultimate travel companion to help you organize every detail of your
            journey. From flight tracking to drag-and-drop itineraries, it's everything you need to
            plan like a pro.
          </p>

          <div class="grid gap-6 sm:grid-cols-2">
            <div class="flex gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10"
              >
                <i class="pi pi-calendar text-color-primary"></i>
              </div>
              <div>
                <h4 class="font-bold">Smart Planner</h4>
                <p class="text-sm text-neutral-500">Visual day-by-day itinerary builder.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10"
              >
                <i class="pi pi-send text-color-primary"></i>
              </div>
              <div>
                <h4 class="font-bold">Flight Tracker</h4>
                <p class="text-sm text-neutral-500">Compare and track all your journeys.</p>
              </div>
            </div>
          </div>

          <BaseButton
            custom-class="group flex items-center gap-3 rounded-full bg-color-primary px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-color-primary/90 hover:scale-105"
          >
            Try Wanderplan
            <i class="pi pi-arrow-right transition-transform group-hover:translate-x-1"></i>
          </BaseButton>
        </motion.div>

        <!-- Mockup Image -->
        <motion.div
          :initial="{ opacity: 0, scale: 0.8, rotate: 2 }"
          :while-in-view="{ opacity: 1, scale: 1, rotate: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 1, type: 'spring', stiffness: 100 }"
          class="relative"
        >
          <!-- Image shadow/glow -->
          <div class="absolute -inset-4 rounded-4xl bg-color-primary/20 blur-3xl"></div>
          <img
            src="@/assets/wanderplan_mockup.png"
            alt="Wanderplan Dashboard Mockup"
            class="relative z-10 rounded-2xl shadow-2xl ring-1 ring-white/10"
          />
        </motion.div>
      </div>
    </div>
  </section>
</template>
