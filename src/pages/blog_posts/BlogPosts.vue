<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';
import PostCard from '@/pages/blog_posts/components/PostCard.vue';
import { useGetAllPosts } from '@/pages/blog_posts/composables/useGetAllPosts';
import { motion } from 'motion-v';
import { ref } from 'vue';

// #NOTE: when clicking on Antalya on home page, navigate the blogs with search populated with antalya
// ------------ PostCards should not have locations like Antalya when navigating from home and you click Antalya, it should display posts under Antalya
// #NOTE: Add Country and date posted over PostCard image
// #NOTE: Download prime vue
// ------------ Use MultiSelect
// ------------ Use Paginator for the blog posts
// ------------ Maybe use Card ?
// #NOTE: Use the blog inspiration to replace "Ready for next side quest" with Mythia
// ------------ Put filters inside it like in screenshot
// #NOTE: Animate header and blog posts from top to bottom

// --- ref ---
const postSearch = ref<string>('');

// --- Get all posts hook ---
const {
  data: allPosts,
  //isFetching: isLatestPostsLoading,
  //isError: hasLatestPostsError,
} = useGetAllPosts();
</script>

<template>
  <div>
    <header class="space-y-7 mt-20 mb-15">
      <div
        class="flex flex-col mx-auto w-[90%] bg-black h-96 p-7 overflow-hidden rounded-4xl shadow-2xl"
      >
        <motion.div
          :initial="{ opacity: 0, y: -50, filter: 'blur(10px)' }"
          :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
          :transition="{
            ease: 'easeInOut',
            type: 'spring',
            duration: 0.9,
            delay: 0.3,
            bounce: 0.6,
          }"
        >
          <h1 class="text-color-primary font-bold">Ready for the next side quest?</h1>
          <p class="text-color-secondary font-bold">
            Join us as we explore new countries, sharing all the tips and tricks we wish we knew to
            make your travels easier!
          </p>
        </motion.div>

        <hr class="border text-white mt-5" />

        <div class="flex justify-between h-full">
          <div class="flex flex-col justify-center h-full gap-4">
            <h2 class="text-color-secondary">Filters</h2>
            <div class="flex gap-4">
              <BaseButton
                custom-class="p-2 w-fit rounded-full font-bold text-[15px] shadow-xl text-black bg-color-secondary hover:bg-color-primary"
              >
                <p class="">All</p>
                <i class="pi pi-circle-fill text-[5px]"></i>
                <p class="text-[10px]">28</p>
              </BaseButton>

              <BaseButton
                custom-class="p-2 w-fit rounded-full font-bold text-[15px] shadow-xl text-black bg-color-secondary hover:bg-color-primary"
              >
                <p class="">All</p>
                <i class="pi pi-circle-fill text-[5px]"></i>
                <p class="text-[10px]">28</p>
              </BaseButton>

              <BaseButton
                custom-class="p-2 w-fit rounded-full font-bold text-[15px] shadow-xl text-black bg-color-secondary hover:bg-color-primary"
              >
                <p class="">All</p>
                <i class="pi pi-circle-fill text-[5px]"></i>
                <p class="text-[10px]">28</p>
              </BaseButton>
            </div>
          </div>

          <div class="flex items-center">
            <BaseInput
              id="blogPostSearch"
              v-model="postSearch"
              label="Search posts"
              type="text"
              placeholder="Search posts.."
              class-name="w-96 bg-white"
            />
          </div>
        </div>
      </div>
    </header>

    <section class="mb-20 space-y-5">
      <div class="flex flex-col gap-2 m-auto w-full">
        <div
          class="relative flex flex-wrap gap-10 justify-center h-auto p-8 text-sm md:text-xl text-center overflow-visible rounded-xl sm:rounded-2xl"
        >
          <PostCard
            v-for="(post, index) in allPosts"
            :key="index"
            :title="post?.article_title"
            :cover-img="post?.cover_image"
            :country-name="post?.country.country_name"
            :date-created="post?.date_created"
          />
        </div>
      </div>
    </section>
  </div>
</template>
