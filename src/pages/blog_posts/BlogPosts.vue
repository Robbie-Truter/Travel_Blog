<script setup lang="ts">
import PostCard from '@/pages/blog_posts/components/PostCard.vue';
import { useGetAllPosts } from '@/pages/blog_posts/composables/useGetAllPosts';

// #NOTE: when clicking on Antalya on home page, navigate the blogs with search populated with antalya
// ------------ PostCards should not have locations like Antalya when navigating from home and you click Antalya, it should display posts under Antalya
// #NOTE: Add Country and date posted over PostCard image
// #NOTE: Download prime vue
// ------------ Use MultiSelect
// ------------ Use Paginator for the blog posts
// ------------ Maybe use Card ?
// #NOTE: Use the blog inspiration to replace "Ready for next side quest" with Mythia
// ------------ Put filters inside it like in screenshot

// --- Get all posts hook ---
const {
  data: allPosts,
  //isFetching: isLatestPostsLoading,
  //isError: hasLatestPostsError,
} = useGetAllPosts();
</script>

<template>
  <div>
    <header class="space-y-7 mb-15">
      <h1 class="text-xl sm:text-2xl md:text-[50px] text-center font-bold mt-20">
        Ready for the next side quest?
      </h1>

      <div
        class="w-2/3 lg:max-w-[900px] py-2 px-5 m-auto text-sm md:text-xl text-center rounded-xl sm:rounded-full bg-color-secondary"
      >
        <p>
          Join us as we explore new countries, sharing all the tips and tricks we wish we knew to
          make your travels easier!
        </p>
      </div>
    </header>

    <section class="mb-20 space-y-5">
      <div class="flex flex-col gap-2 m-auto w-full">
        <!--Change this to a a dropdown with all countries visited-->
        <!--<input
          id="filterBlogs"
          type="text"
          placeholder="Search Blogs"
          class="w-full md:w-80 p-2 text-black bg-color-secondary rounded-full"
        />-->
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
