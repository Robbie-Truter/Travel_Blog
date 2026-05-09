<script setup lang="ts">
import { useGetLatestPosts } from '@/pages/home_page/composables/useGetLatestPosts';
import { TLatestPosts } from '@/types/posts';
import { motion } from 'motion-v';
import { useToast } from 'primevue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useGetRelatedPosts } from '../composables/useGetRelatedPosts';

const props = defineProps<{
  countryName: string;
  currentPostSlug: string;
}>();

const toast = useToast();
const router = useRouter();
const DIRECTUS_URL = import.meta.env.VITE_API_BASE_URL;

// 1. Fetch posts from the same country
const { data: relatedPosts, isFetching: isRelatedFetching } = useGetRelatedPosts(
  props.countryName,
  props.currentPostSlug
);

// 2. Fetch latest posts as a fallback
const { data: latestPosts, isFetching: isLatestFetching } = useGetLatestPosts();

const isFetching = computed(() => isRelatedFetching.value || isLatestFetching.value);

const displayData = computed(() => {
  // If we have country-specific posts, show them
  if (relatedPosts.value && relatedPosts.value.length > 0) {
    return {
      title: `More from ${props.countryName}`,
      posts: relatedPosts.value,
    };
  }

  // Otherwise, fallback to latest posts (excluding the current one)
  if (latestPosts.value) {
    const filtered = latestPosts.value
      .filter((post) => post.slug !== props.currentPostSlug)
      .slice(0, 3);
    return {
      title: 'Where to next?',
      posts: filtered,
    };
  }

  return { title: '', posts: [] };
});

const navigateToPost = (post: TLatestPosts) => {
  if (post.slug) {
    router.push(`/blogs/${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
  <section
    v-if="!isFetching && displayData.posts.length > 0"
    class="mt-32 border-t border-neutral-100 pt-20"
  >
    <div class="mx-auto max-w-4xl px-6 md:px-0">
      <header class="mb-16 flex flex-col items-center justify-center gap-5 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-neutral-800">
          {{ displayData.title }}
        </h2>
        <span class="h-[3px] w-10 rounded-full bg-[#EDB5BF]" />
      </header>

      <div class="grid gap-10 md:grid-cols-3">
        <motion.div
          v-for="(post, index) in displayData.posts"
          :key="post.slug"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ delay: index * 0.1, duration: 0.5 }"
          class="group cursor-pointer flex flex-col gap-4"
          @click="navigateToPost(post)"
        >
          <!-- Card Image -->
          <div
            class="relative overflow-hidden rounded-3xl aspect-4/3 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1"
          >
            <img
              :src="`${DIRECTUS_URL}/assets/${post.cover_image}?width=600&quality=80&format=webp`"
              :alt="post.article_title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></div>

            <div
              class="absolute top-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <span
                class="bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm"
              >
                Read Post
              </span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="space-y-1.5 px-2">
            <p
              v-if="post.country?.country_name"
              class="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400"
            >
              {{ post.country.country_name }}
            </p>
            <h4
              class="text-lg font-bold leading-tight text-neutral-800 transition-colors duration-300 group-hover:text-color-primary"
            >
              {{ post.article_title }}
            </h4>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>
