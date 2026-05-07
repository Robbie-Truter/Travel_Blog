<script setup lang="ts">
import ScrollFade from '@/components/ScrollFade.vue';
import { motion } from 'motion-v';

const funFacts = [
  {
    title: '🌍 All-time favorite destination',
    people: [
      { name: 'Kija', text: 'Kas, Antalya', avatar: '/about-me/kijaProfile.jpg' },
      { name: 'Robert', text: 'Westendorf, Austria', avatar: '/about-me/robertProfile.jpg' },
    ],
  },
  {
    title: '🗺️ How many places have we explored?',
    people: [
      { name: 'Kija', text: '2 — still a newbie!', avatar: '/about-me/kijaProfile.jpg' },
      {
        name: 'Robert',
        text: '12 — fun fact, my dad was a pilot ✈️',
        avatar: '/about-me/robertProfile.jpg',
      },
    ],
  },
  {
    title: '🍽️ Local dish we always crave',
    people: [
      {
        name: 'Kija',
        text: 'Manti — Turkish ravioli & khinkhali',
        avatar: '/about-me/kijaProfile.jpg',
      },
      { name: 'Robert', text: 'Adana Dürüm', avatar: '/about-me/robertProfile.jpg' },
    ],
  },
  {
    title: '✨ Bucket list dreams',
    people: [
      {
        name: 'Kija',
        text: 'Hiking in Switzerland or Austria, Pompeii & Chernobyl',
        avatar: '/about-me/kijaProfile.jpg',
      },
      {
        name: 'Robert',
        text: 'Japan, skiing in Austria, Christmas markets & medieval fairs',
        avatar: '/about-me/robertProfile.jpg',
      },
    ],
  },
];
</script>

<template>
  <div class="overflow-hidden">
    <ScrollFade class="my-40">
      <header class="mx-auto max-w-3xl px-6 text-center space-y-8">
        <div class="relative inline-block">
          <h1 class="relative z-10 text-3xl font-bold tracking-tight md:text-4xl">
            We’re Kija & Robert
          </h1>
          <div class="absolute inset-x-0 bottom-1 h-3 bg-color-primary/70 -z-10 rounded-sm"></div>
        </div>
        <section
          class="mx-auto mt-5 max-w-2xl px-2 space-y-5 font-bold tracking-wider break-keep text-gray-800 sm:px-0"
        >
          <p>
            Hi! We 're Kija & Robbie from Cape Town, South Africa. By day, we work in marketing and
            software development, and by night, we're dreaming of our next destination.
          </p>

          <p>
            In 2023, we set out on our first big adventure to Türkiye, and it sparked a passion that
            quickly became a lifestyle. Since then, we've been navigating the balance of working a
            9-5 and traveling the world, capturing moments that inspire others to look beyond their
            routines.
          </p>

          <p>
            We're big believers in slow travel—choosing depth over speed and discovering the beauty
            in everyday moments. Through our blog, we aim to guide and inspire you to turn your
            travel dreams into reality.
          </p>
        </section>
      </header>
    </ScrollFade>

    <!-- Header Section -->
    <motion.div
      :initial="{ opacity: 0, y: -20 }"
      :in-view="{ opacity: 1, y: 0 }"
      :transition="{ type: 'spring', stiffness: 180, damping: 20, delay: 0.2 }"
      class="mt-20 px-6 lg:px-20 xl:px-40"
    >
      <header class="mb-12 text-center">
        <h1 class="text-3xl font-bold tracking-tight mb-2">About Us</h1>
        <p class="text-sm text-neutral-500 mb-6">The people behind the journey</p>

        <div class="flex justify-center">
          <span class="h-[3px] w-10 rounded-full bg-[#EDB5BF]" />
        </div>
      </header>
    </motion.div>

    <section class="flex justify-center px-6 my-40">
      <div class="flex flex-col sm:flex-row gap-24 sm:gap-16">
        <!-- ROBERT -->
        <motion.figure
          class="relative w-full max-w-xs rounded-3xl bg-white p-6 pt-20 text-center shadow-xl"
          :initial="{ opacity: 0, x: -50 }"
          :in-view="{ opacity: 1, x: 0 }"
          :transition="{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }"
        >
          <img
            src="/about-me/robertProfile.jpg"
            class="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full object-cover ring-4 ring-white"
          />
          <h2
            class="mt-4 inline-block rounded-md bg-[#99bfd7] px-4 py-1 text-lg font-bold text-white"
          >
            The Researcher
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-gray-700">
            Hi, I’m Robbie, a software developer who spends most of my days coding and
            problem-solving. Travel gives me the chance to experience different cultures.
          </p>
        </motion.figure>

        <!-- KIJA -->
        <motion.figure
          class="relative w-full max-w-[350px] rounded-3xl bg-white p-6 pt-20 text-center shadow-xl"
          :initial="{ opacity: 0, x: 50 }"
          :in-view="{ opacity: 1, x: 0 }"
          :transition="{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }"
        >
          <img
            src="/about-me/kijaProfile.jpg"
            class="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full object-cover ring-4 ring-white"
          />
          <h2
            class="mt-4 inline-block rounded-md bg-color-primary px-4 py-1 text-lg font-bold text-white"
          >
            The Planner
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-gray-700">
            I’m Kija, a 21-year-old social media coordinator by day, and in my downtime, I’m
            probably browsing Google Flights for our next adventure!
          </p>
          <p class="mt-3 text-sm leading-relaxed text-gray-700">
            Slow travel is how I like to explore—learning a few new words in a foreign language,
            browsing local grocery stores, and figuring out dinner plans with unknown ingredients.
          </p>
          <p class="mt-3 text-sm font-semibold text-gray-800">
            My motto comes from Anthony Bourdain:
          </p>
          <p class="mt-2 text-xs italic text-gray-600">
            “If you’re twenty-two, fit, and eager to learn, travel as far and wide as you can. Sleep
            on floors if you need to…”
          </p>
        </motion.figure>
      </div>
    </section>

    <!-- FUN FACTS / Q&A -->
    <ScrollFade class="my-40">
      <section class="mx-auto max-w-5xl px-6">
        <!-- Section Header -->
        <header class="mb-12 text-center">
          <h1 class="text-3xl font-bold tracking-tight mb-2">A Few Fun Facts</h1>
          <p class="text-sm text-neutral-500 mb-6">
            The little things that say a lot about how we travel ✈️
          </p>

          <div class="flex justify-center">
            <span class="h-[3px] w-10 rounded-full bg-[#EDB5BF]" />
          </div>
        </header>

        <div class="grid gap-8 md:grid-cols-2">
          <motion.article
            v-for="(fact, index) in funFacts"
            :key="index"
            class="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
            :initial="{ opacity: 0, y: 50, scale: 0.95 }"
            :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
            :viewport="{ once: true }"
            :transition="{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: index * 0.2,
            }"
          >
            <h3 class="text-lg font-semibold mb-4">{{ fact.title }}</h3>
            <div class="space-y-4">
              <div v-for="person in fact.people" :key="person.name" class="flex items-center gap-4">
                <img
                  :src="person.avatar"
                  alt="avatar"
                  class="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p class="font-medium text-gray-800">{{ person.name }}</p>
                  <p class="text-sm text-gray-600">{{ person.text }}</p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </ScrollFade>
  </div>
</template>
