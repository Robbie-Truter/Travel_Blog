<script setup lang="ts">
import ScrollFade from '@/components/ScrollFade.vue';
import LatestPostsError from '@/pages/home_page/components/LatestPostsError.vue';
import LatestPostsSkeleton from '@/pages/home_page/components/LatestPostsSkeleton.vue';
import { useGetLatestPosts } from '@/pages/home_page/composables/useGetLatestPosts';
import { TLatestPosts } from '@/types/posts';
import 'primeicons/primeicons.css';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();

const {
  data: latestPosts,
  isFetching: isLatestPostsLoading,
  isError: hasLatestPostsError,
  refetch: refetchLatestPosts,
} = useGetLatestPosts();

const DIRECTUS_URL = import.meta.env.VITE_API_BASE_URL;

const selectPost = (post: TLatestPosts) => {
  if (post?.slug) {
    router.push(`/blogs/${post.slug}`);
  } else {
    toast.add({
      severity: 'error',
      summary: 'Post Unavailable',
      detail: `"${post?.article_title || 'This post'}" could not be opened. Please try another.`,
      life: 3000,
      group: 'tr',
    });
  }
};
</script>

<template>
  <!-- Loading state -->
  <section v-if="isLatestPostsLoading" class="mt-12 mb-20 px-6 lg:mt-20 lg:px-20 xl:px-40">
    <LatestPostsSkeleton />
  </section>

  <!-- Error state -->
  <section v-else-if="hasLatestPostsError" class="mt-12 mb-20 px-6 lg:mt-20 lg:px-20 xl:px-40">
    <LatestPostsError :refetch="refetchLatestPosts" />
  </section>

  <!-- Success state -->
  <section v-else-if="latestPosts && latestPosts.length > 0" class="px-6 lg:px-20 xl:px-40 w-full">
    <!-- Featured Posts Header -->
    <header class="mb-12 text-center">
      <h1 class="text-3xl font-bold tracking-tight mb-2">Featured Posts</h1>
      <p class="text-sm text-neutral-500 mb-6">Hand-picked articles worth exploring</p>

      <div class="flex justify-center">
        <span class="h-[3px] w-10 rounded-full bg-[#EDB5BF]" />
      </div>
    </header>

    <!-- Content -->
    <ScrollFade :viewport-amount="0.2">
      <div class="w-full flex flex-col lg:flex-row justify-center gap-8 font-bold text-lg">
        <!-- List -->
        <article class="flex flex-col gap-2 w-full 2xl:w-auto">
          <figure
            v-for="(post, index) in latestPosts"
            :key="index"
            class="rounded cursor-pointer"
            @click="selectPost(post)"
          >
            <aside
              class="flex items-center gap-4 transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-md rounded-xl p-2"
            >
              <img
                :src="`${DIRECTUS_URL}/assets/${post.cover_image}?width=400&quality=80&format=webp`"
                :alt="post.article_title"
                class="h-28 min-w-28 rounded-2xl object-cover"
              />
              <p class="text-wrap leading-snug">
                {{ post.article_title }}
              </p>
            </aside>

            <hr v-if="latestPosts[index + 1]" class="w-full my-3 border-gray-200" />
          </figure>
        </article>

        <!-- Highlighted post -->
        <figure class="self-center relative cursor-pointer" @click="selectPost(latestPosts[0])">
          <img
            :src="`${DIRECTUS_URL}/assets/${latestPosts[0].cover_image}?quality=80&format=webp`"
            :alt="latestPosts[0].article_title"
            class="h-80 lg:h-120 w-140 rounded-xl object-cover brightness-[.7]"
          />

          <figcaption
            class="absolute top-5 left-5 px-4 py-2 text-sm font-semibold rounded-full bg-color-primary text-white"
          >
            Latest Post
          </figcaption>

          <figcaption
            class="absolute bottom-6 left-6 right-6 text-white text-lg font-bold leading-tight [text-shadow:0_1px_0_rgb(0_0_0/40%)]"
          >
            {{ latestPosts[0]?.article_title }}
          </figcaption>
        </figure>
      </div>
    </ScrollFade>
  </section>
</template>
