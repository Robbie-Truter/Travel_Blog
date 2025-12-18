<script setup lang="ts">
import { useGetPostByArticle } from '@/pages/blog_posts/composables/useGetPostByArticle';
import { formatDate } from '@/util/formatDate';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// --- Composables ---
const router = useRoute();
const { data } = useGetPostByArticle(router.params.id as string);

// --- Computed Properties ---
const postData = computed(() => data?.value?.[0]);
</script>

<template>
  <div>
    <header
      class="mx-auto mt-20 flex h-112 w-6xl overflow-hidden rounded-4xl bg-color-primary shadow-xl"
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

      <figure class="relative flex-[1.7]">
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
          :src="`http://localhost:8055/assets/${postData?.cover_image}`"
          :alt="postData?.article_title ?? 'Blog post image'"
          class="h-full w-full object-cover"
        />
      </figure>
    </header>
    <section v-if="postData?.article_content">
      <article class="blog-content" v-html="postData?.article_content"></article>
    </section>
  </div>
</template>

<style lang="css">
.blog-content {
  color: red;
}
</style>
