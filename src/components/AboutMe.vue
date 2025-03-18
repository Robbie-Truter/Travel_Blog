<script setup>
import NavBar from "./NavBar.vue";
</script>

<template>
  <header class="flex flex-col self-center items-center gap-10 w-full mt-10 p-5 text-center">
    <div class="w-80 relative">
      <h1 class="text-[35px] p-1 z-20 font-bold">We're Kija & Robert</h1>
      <div class="absolute h-6 w-full bottom-0 -z-10 bg-color-primary"></div>
    </div>

    <section class="w-80 sm:w-[600px] mt-5 space-y-5 font-bold tracking-wider break-keep">
      <p>
        Hi! We're Kija & Robbie from Cape Town, South Africa. By day, we work in marketing and
        software development, and by night, we're dreaming of our next destination.
      </p>

      <p>
        In 2023, we set out on our first big adventure to Türkiye, and it sparked a passion that
        quickly became a lifestyle. Since then, we've been navigating the balance of working a 9-5
        and traveling the world, capturing moments that inspire others to look beyond their
        routines.
      </p>

      <p>
        We're big believers in slow travel—choosing depth over speed and discovering the beauty in
        everyday moments. Through our blog, we aim to guide and inspire you to turn your travel
        dreams into reality.
      </p>
    </section>
  </header>

  <section class="flex flex-col items-center justify-center gap-10 w-full mt-28">
    <div class="flex flex-col sm:flex-row items-center gap-40 sm:gap-2 md:gap-20">
      <figure
        class="relative h-64 w-64 p-5 text-center text-white bg-[#99bfd7] space-y-2 rounded-2xl"
      >
        <img
          src="/about-me/robertProfile.jpg"
          class="absolute top-[-100px] left-0 right-0 mx-auto h-32 w-32 object-cover rounded-full"
        />
        <h2 class="p-1 mx-4 text-xl font-bold bg-[#3e3c3c] mt-7">The Researcher</h2>
        <p class="font-bold text-sm tracking-wider drop-shadow-2xl">
          Hi, I’m Robbie, a software developer who spends most of my days coding and
          problem-solving. Travel gives me the chance to experience different cultures.
        </p>
      </figure>

      <figure
        class="relative w-[350px] p-5 text-center text-white bg-color-primary space-y-2 rounded-2xl"
      >
        <img
          src="/about-me/kijaProfile.jpg"
          class="absolute top-[-100px] left-0 right-0 mx-auto h-32 w-32 object-cover rounded-full"
        />
        <h2 class="p-1 mx-4 text-xl font-bold bg-[#3e3c3c] mt-7">The Planner</h2>
        <p class="font-bold text-sm tracking-wider drop-shadow-2xl">
          I’m Kija, a 21-year-old social media coordinator by day, and in my downtime, I’m probably
          browsing Google Flights for our next adventure!
        </p>
        <p class="font-bold text-sm tracking-wider drop-shadow-2xl">
          Slow travel is how I like to explore—learning a few new words in a foreign language,
          browsing through local grocery stores, and figuring out dinner plans with new unknown
          ingredients.
        </p>
        <p class="font-bold text-sm tracking-wider drop-shadow-2xl">
          My motto comes from Anthony Bourdain:
        </p>
        <p class="text-[9px] tracking-wider text-black">
          ‘If you’re twenty-two, fit, and eager to learn, travel as far and wide as you can. Sleep
          on floors if you need to. Experience how others live, eat, and cook’
        </p>
      </figure>
    </div>
  </section>
</template>
