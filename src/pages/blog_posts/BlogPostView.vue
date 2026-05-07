<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { useGetPostByArticle } from '@/pages/blog_posts/composables/useGetPostByArticle';
import { formatDate } from '@/util/formatDate';
import { AnimatePresence, motion } from 'motion-v';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BlogPostViewSkeleton from './components/skeletons/BlogPostViewSkeleton.vue';

// Base URL
const DIRECTUS_URL = import.meta.env.VITE_API_BASE_URL;

// --- Composables ---
const router = useRoute();
const { data, isFetching, isError, refetch } = useGetPostByArticle(router.params.slug as string);

// --- Computed Properties ---
const postData = computed(() => data?.value?.[0]);
</script>

<template>
  <div>
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
              <span
                class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow-md backdrop-blur-sm"
              >
                {{ postData?.country?.country_name }}
              </span>
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
              class="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl"
            >
              {{ postData?.article_title }}
            </h1>

            <!-- Date -->
            <p class="mt-4 text-base font-medium text-white/80">
              Published on {{ formatDate(postData?.date_created) ?? 'Unknown date' }}
            </p>
          </div>
        </motion.header>

        <motion.section
          v-if="postData?.article_content"
          class="mx-auto my-20"
          :initial="{ opacity: 0 }"
          :in-view="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <article class="blog-content" v-html="postData?.article_content"></article>
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
  max-width: 1152px;
  width: 100%;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 1rem;
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
