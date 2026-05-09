<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { useGetPostByArticle } from '@/pages/blog_posts/composables/useGetPostByArticle';
import { formatDate } from '@/util/formatDate';
import 'flag-icons/css/flag-icons.min.css';
import { AnimatePresence, motion } from 'motion-v';
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ReadingProgressBar from './components/ReadingProgressBar.vue';
import RelatedPosts from './components/RelatedPosts.vue';
import BlogPostViewSkeleton from './components/skeletons/BlogPostViewSkeleton.vue';
import SocialShare from './components/SocialShare.vue';

// Base URL
const DIRECTUS_URL = import.meta.env.VITE_API_BASE_URL;

// --- Composables ---
const route = useRoute();
const router = useRouter();
const { data, isFetching, isError, refetch } = useGetPostByArticle(
  () => route.params.slug as string
);

// --- Computed Properties ---
const postData = computed(() => data?.value?.[0]);

const readingTime = computed(() => {
  const content = postData.value?.article_content;
  if (!content) return 0;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / 200);
});

// --- Watchers ---
watch(
  () => postData.value?.article_title,
  (newTitle) => {
    if (newTitle) document.title = `${newTitle} | Travel Blog`;
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <ReadingProgressBar />
    <SocialShare />

    <!-- Fixed Back Button -->
    <motion.div
      v-tooltip.right="{
        value: 'Back to blogs',
        showDelay: 200,
        pt: {
          text: 'bg-linear-to-br! from-[#121212]! !via-[#1a1a1a] to-[#222222]! text-primary-contrast! font-medium!',
        },
      }"
      :initial="{ opacity: 0, x: -20 }"
      :animate="{ opacity: 1, x: 0 }"
      :transition="{ delay: 0.5, type: 'spring', stiffness: 100 }"
      class="fixed top-20 left-4 z-100 md:top-22 md:left-8"
    >
      <BaseButton
        custom-class="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-bold text-neutral-800 shadow-xl backdrop-blur-md md:px-5 md:py-2.5 md:text-md"
        @click="router.push('/blogs')"
      >
        <i class="pi pi-arrow-left text-sm md:text-md"></i>
      </BaseButton>
    </motion.div>

    <AnimatePresence>
      <!-- Loading state -->
      <BlogPostViewSkeleton v-if="isFetching" />

      <!-- Error state -->
      <motion.div
        v-else-if="isError"
        :initial="{ opacity: 0, scale: 0.9 }"
        :animate="{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.3, ease: 'easeInOut', duration: 0.3 },
        }"
        class="relative mx-auto my-40 flex h-40 w-[90%] max-w-lg flex-col items-center justify-center gap-3 rounded-2xl border bg-color-secondary p-6 text-center shadow-lg"
      >
        <h3 class="text-shadow-sm font-bold">Something went wrong, please try again</h3>
        <span class="pi pi-exclamation-triangle text-2xl text-color-primary text-shadow-sm"></span>
        <BaseButton
          custom-class="absolute top-0 right-0 mr-[-1px] mt-[-1px] w-fit rounded-r-md border p-[5px]! font-bold shadow-xl bg-color-primary"
          @click="refetch"
        >
          <span class="pi pi-refresh text-[12px] text-shadow-sm"></span>
        </BaseButton>
      </motion.div>

      <!-- Empty state -->
      <motion.div
        v-else-if="!postData"
        :initial="{ opacity: 0, scale: 0.9 }"
        :animate="{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.3, ease: 'easeInOut', duration: 0.3 },
        }"
        class="my-40 mx-auto flex h-32 w-64 flex-col items-center justify-center gap-3 self-center rounded-2xl border bg-color-secondary p-4 shadow-lg"
      >
        <span class="pi pi-search-minus text-3xl text-color-primary text-shadow-sm"></span>
        <h3 class="text-shadow-sm font-bold">No post found</h3>
      </motion.div>

      <!-- Populated state -->
      <div v-else>
        <motion.header
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.8, ease: 'easeInOut' }"
          class="relative mb-20 flex h-[55vh] w-full items-center justify-center"
        >
          <!-- Background Image -->
          <img
            :src="`${DIRECTUS_URL}/assets/${postData?.cover_image}?quality=80&format=webp`"
            :alt="postData?.article_title ?? 'Blog post image'"
            class="absolute inset-0 z-0 h-full w-full object-cover"
          />

          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-black/30 to-transparent"
          ></div>

          <!-- Content -->
          <div
            class="relative z-20 flex max-w-4xl flex-col items-center px-4 text-center text-white"
          >
            <!-- Metadata Pills -->
            <div class="flex flex-wrap items-center justify-center gap-3">
              <div
                class="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow-md backdrop-blur-sm"
              >
                <div
                  v-if="postData?.country?.country_iso || postData?.country?.flag_emoji"
                  class="shrink-0 h-4 w-5.5 overflow-hidden rounded-xs border border-white/20 shadow-sm"
                >
                  <span
                    v-if="postData.country.country_iso"
                    :class="`fi fi-${postData.country.country_iso} block! w-full! h-full! bg-cover! bg-center!`"
                  ></span>
                  <span v-else class="text-[10px] leading-none">
                    {{ postData.country.flag_emoji }}
                  </span>
                </div>
                {{ postData?.country?.country_name }}
              </div>
              <span v-if="postData?.location?.location_name" class="text-white/50">/</span>
              <span
                v-if="postData?.location?.location_name"
                class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow-md backdrop-blur-sm"
              >
                {{ postData?.location?.location_name }}
              </span>
            </div>

            <!-- Title -->
            <h1
              class="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl"
            >
              {{ postData?.article_title }}
            </h1>

            <!-- Date & Reading Time -->
            <div
              class="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-white/80 md:gap-3 md:text-base"
            >
              <p>Published on {{ formatDate(postData?.date_created) ?? 'Unknown date' }}</p>
              <span v-if="readingTime" class="hidden opacity-30 md:block">|</span>
              <p v-if="readingTime" class="flex items-center gap-1.5">
                <i class="pi pi-clock text-xs md:text-sm"></i>
                {{ readingTime }} min read
              </p>
            </div>
          </div>
        </motion.header>

        <motion.section
          v-if="postData?.article_content"
          class="mx-auto my-20 px-6 md:px-0"
          :initial="{ opacity: 0 }"
          :in-view="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <article class="blog-content" v-html="postData?.article_content"></article>

          <!-- Related Posts -->
          <RelatedPosts
            v-if="postData?.country?.country_name && route.params.slug"
            :country-name="postData.country.country_name"
            :current-post-slug="route.params.slug as string"
          />
        </motion.section>

        <!-- Content Fallback -->
        <motion.div
          v-else
          class="mx-auto my-32 flex max-w-2xl flex-col items-center gap-4 text-center text-slate-400"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ delay: 0.4 }"
        >
          <span class="pi pi-map text-3xl opacity-50"></span>
          <p class="text-xl font-medium italic opacity-80">
            The full story is still being captured... <br />
            Check back soon for the complete adventure.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  </div>
</template>

<style lang="css">
.blog-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: auto;
  max-width: 800px;
  width: 100%;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.blog-content h1,
.blog-content h2,
.blog-content h3,
.blog-content h4 {
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.blog-content p {
  margin-bottom: 1.25rem;
}

.blog-content a {
  color: #3b82f6;
  text-decoration: underline;
}

.blog-content ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.blog-content ol {
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.blog-content blockquote {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  font-style: italic;
  color: #555;
  margin: 1rem 0;
}

.blog-content img {
  max-width: 100%;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}

.blog-content strong {
  font-weight: 700;
}

.blog-content em {
  font-style: italic;
}

.blog-content hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 2rem 0;
}
</style>
