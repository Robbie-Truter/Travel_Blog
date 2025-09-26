<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getLatestPostsByDate } from '@/util/services/posts/getLatestPostsByDate';
import 'primeicons/primeicons.css';

const latestPosts = ref<any[]>([]);

onMounted(async () => {
  const latestPostsByDateResponseData = await getLatestPostsByDate();
  latestPosts.value = latestPostsByDateResponseData;
});
</script>

<template>
  <section
    class="flex flex-col lg:flex-row justify-center gap-6 w-full mt-12 mb-20 px-2 lg:mt-20 lg:px-20 xl:px-40 font-bold text-lg"
  >
    <article class="flex flex-col gap-2 w-full 2xl:w-auto">
      <figure
        v-for="(post, index) in latestPosts"
        v-if="latestPosts && latestPosts.length > 0"
        :key="index"
        class="rounded cursor-pointer"
      >
        <aside
          class="flex flex-row justify-start items-center gap-4 transition ease-in-out duration-100 hover:bg-gray-100 hover:shadow-md"
        >
          <img
            :src="`http://localhost:8055/assets/${post.cover_image}?width=400&quality=80&format=webp`"
            :alt="post.article_title"
            class="h-28 min-w-28 rounded-2xl object-cover"
          />
          <p class="text-wrap">{{ post.article_title }}</p>
        </aside>
        <hr v-if="latestPosts[index + 1]" class="w-full my-3" />
      </figure>
    </article>

    <figure class="self-center relative cursor-pointer">
      <img
        v-if="latestPosts && latestPosts.length > 0"
        :src="`http://localhost:8055/assets/${latestPosts[0].cover_image}`"
        :alt="latestPosts[0].article_title"
        class="h-[20rem] lg:h-[30rem] w-[35rem] rounded-xl object-cover brightness-[.7]"
      />
      <figcaption
        class="absolute top-5 left-5 p-3 text-xl rounded-full transition duration-100 ease-in-out bg-color-primary text-white"
      >
        Latest Post
      </figcaption>
      <figcaption
        class="absolute top-20 left-7 w-40 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
      >
        {{ latestPosts[0]?.article_title }}
      </figcaption>
    </figure>
  </section>
</template>
