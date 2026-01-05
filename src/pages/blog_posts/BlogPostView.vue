<script setup lang="ts">
import { useGetPostByArticle } from '@/pages/blog_posts/composables/useGetPostByArticle';
import { formatDate } from '@/util/formatDate';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Base URL
const DIRECTUS_URL = import.meta.env.VITE_API_BASE_URL;

// --- Composables ---
const router = useRoute();
const { data } = useGetPostByArticle(router.params.id as string);

// --- Computed Properties ---
const postData = computed(() => data?.value?.[0]);
</script>

<template>
  <div>
    <header
      class="mx-auto my-20 flex h-112 w-6xl overflow-hidden rounded-4xl bg-color-primary shadow-xl"
    >
      <div class="flex flex-1 items-center px-12">
        <div class="max-w-lg">
          <h1
            class="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl"
          >
            {{ postData?.article_title }}
          </h1>

          <div class="mt-5 h-1 w-14 rounded-full bg-primary-turquoise" />
        </div>
      </div>

      <figure class="relative flex-[2.3]">
        <div
          class="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/40 via-black/10 to-transparent"
        ></div>

        <figcaption
          class="absolute bottom-4 left-5 z-20 flex flex-wrap gap-3 text-sm font-semibold text-white"
        >
          <span class="rounded-full bg-white/90 px-4 py-2 text-slate-900 shadow-md backdrop-blur">
            {{ postData?.country?.country_name }}
          </span>

          <span class="rounded-full bg-white/90 px-4 py-2 text-slate-900 shadow-md backdrop-blur">
            {{ postData?.location?.location_name }}
          </span>

          <span class="rounded-full bg-white/90 px-4 py-2 text-slate-900 shadow-md backdrop-blur">
            {{ formatDate(postData?.date_created) ?? 'Unknown date' }}
          </span>
        </figcaption>

        <img
          :src="`${DIRECTUS_URL}/assets/${postData?.cover_image}`"
          :alt="postData?.article_title ?? 'Blog post image'"
          class="h-full w-full object-cover"
        />
      </figure>
    </header>
    <section v-if="postData?.article_content" class="mx-auto my-20">
      <article class="blog-content" v-html="postData?.article_content"></article>
    </section>
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
