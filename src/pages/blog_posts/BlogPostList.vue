<script setup lang="ts">
// #NOTE: when clicking on Antalya on home page, navigate the blogs with search populated with antalya
// ------------ PostCards should not have locations like Antalya when navigating from home and you click Antalya, it should display posts under Antalya
// #NOTE: Download prime vue
// ------------ Use MultiSelect
// ------------ Maybe use Card ?

import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';
import PostCard from '@/pages/blog_posts/components/PostCard.vue';
import { useGetAllPosts } from '@/pages/blog_posts/composables/useGetAllPosts';
import { AnimatePresence, motion } from 'motion-v';
import { PageState } from 'primevue/paginator';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import PostPagination from './components/PostPagination.vue';

// --- Ref ---
const selectedCountryFilter = ref<string>('All');
const selectedLocationFilter = ref<string>('');
const postSearch = ref<string>('');
const currentPage = ref<number>(0);

// --- Composable ---
const {
  data: allPosts,
  //isFetching: isLatestPostsLoading,
  //isError: hasLatestPostsError,
} = useGetAllPosts();

const router = useRouter();

// --- Computed Properties ---
const countryFilters = computed(() => {
  // Get all unique country names with the total count and display as filters
  const allFilters: Record<string, number> = {};

  allPosts.value?.forEach((post) => {
    const filterName = post.country.country_name;

    allFilters[filterName] = (allFilters[filterName] ?? 0) + 1;
  });

  const totalPosts = Object.values(allFilters).reduce((sum, value) => sum + value, 0);

  return { allFilters, totalPosts };
});

const locationFilters = computed(() => {
  if (!allPosts.value) return null;

  const allFilters: Record<string, number> = {};
  const selectedCountry = selectedCountryFilter.value;

  if (selectedCountry !== 'All') {
    const filteredPosts = allPosts.value?.filter(
      (post) => post.country.country_name === selectedCountryFilter.value
    );

    filteredPosts?.forEach((post) => {
      const locationName = post.location?.location_name;

      if (locationName) allFilters[locationName] = (allFilters[locationName] ?? 0) + 1;
    });

    return allFilters;
  }

  return {};
});

const filteredBlogPosts = computed(() => {
  if (!allPosts.value) return [];

  let filteredPosts = allPosts.value;

  // Country and Location filtering
  if (selectedCountryFilter.value !== 'All') {
    filteredPosts = filteredPosts.filter((post) => {
      const countryMatch = post.country.country_name === selectedCountryFilter.value;
      const locationMatch =
        !selectedLocationFilter.value ||
        post.location.location_name === selectedLocationFilter.value;
      return countryMatch && locationMatch;
    });
  }

  // Search filtering
  if (postSearch.value) {
    const searchTerm = postSearch.value.toLowerCase().trim();
    if (searchTerm) {
      filteredPosts = filteredPosts.filter((post) =>
        post.article_title.toLowerCase().includes(searchTerm)
      );
    }
  }

  return filteredPosts;
});

const paginatedPosts = computed(() => {
  return filteredBlogPosts.value.slice(currentPage.value, currentPage.value + 5);
});

// --- Methods ---
const applyCountryFilter = (type: 'country' | 'location', selectedFilter: string) => {
  if (type === 'country') {
    selectedLocationFilter.value = '';
    selectedCountryFilter.value = selectedFilter;
  } else {
    if (selectedLocationFilter.value === selectedFilter) selectedLocationFilter.value = '';
    else selectedLocationFilter.value = selectedFilter;
  }
};

const updatePagination = (event: PageState) => {
  currentPage.value = event.first;
};

const selectPost = (postTitle: string) => {
  if (postTitle) {
    router.push(`/blogs/${postTitle}`);
  }
};
</script>

<template>
  <div>
    <header class="space-y-7 mt-20 mb-15">
      <div
        class="flex flex-col gap-5 mx-auto w-[90%] bg-black min-h-fit p-7 rounded-4xl shadow-2xl"
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
          <h1 class="text-color-primary font-bold mb-5">Ready for the next side quest?</h1>
          <p class="text-color-secondary font-bold">
            Join us as we explore new countries, sharing all the tips and tricks we wish we knew to
            make your travels easier!
          </p>
        </motion.div>

        <hr class="border text-white mt-5" />

        <div class="flex flex-wrap gap-3 justify-between w-full h-full">
          <div class="flex flex-col justify-center w-full lg:w-1/3 gap-4">
            <h2 class="text-color-secondary">Filters</h2>
            <div class="flex flex-wrap gap-4 mb-3">
              <motion.div
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ delay: 0.1, duration: 0.3 }"
              >
                <BaseButton
                  :custom-class="[
                    selectedCountryFilter === 'All' ? 'bg-color-primary' : 'bg-color-secondary',
                    'p-2 w-fit rounded-full font-bold text-[15px] shadow-xl text-black hover:bg-color-primary',
                  ]"
                  @click="applyCountryFilter('country', 'All')"
                >
                  <p class="">All</p>
                  <i class="pi pi-circle-fill text-[5px]"></i>
                  <p class="text-[10px]">{{ countryFilters.totalPosts }}</p>
                </BaseButton>
              </motion.div>
              <motion.div
                v-for="(value, key, index) in countryFilters.allFilters"
                :key="key"
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ delay: 0.1 + index * 0.05, duration: 0.3 }"
              >
                <BaseButton
                  :custom-class="[
                    selectedCountryFilter === key ? 'bg-color-primary' : 'bg-color-secondary',
                    'w-fit rounded-full font-bold shadow-xl text-black hover:bg-color-primary',
                  ]"
                  @click="applyCountryFilter('country', key)"
                >
                  <p class="">{{ key }}</p>
                  <i class="pi pi-circle-fill text-[5px]"></i>
                  <p class="text-[10px]">{{ value }}</p>
                </BaseButton>
              </motion.div>
            </div>

            <AnimatePresence>
              <div class="flex flex-wrap gap-4">
                <motion.div
                  v-for="(value, key, index) in locationFilters"
                  :key="key"
                  :initial="{ opacity: 0, y: 20 }"
                  :animate="{ opacity: 1, y: 0 }"
                  :exit="{ opacity: 0, y: 20 }"
                  :transition="{ delay: 0.1 + index * 0.05, duration: 0.3 }"
                >
                  <BaseButton
                    size="xsm"
                    :custom-class="[
                      selectedLocationFilter === key ? 'bg-color-primary' : 'bg-color-secondary',
                      'w-fit rounded-full font-bold shadow-xl text-black hover:bg-color-primary',
                    ]"
                    @click="applyCountryFilter('location', key)"
                  >
                    <p class="">{{ key }}</p>
                    <i class="pi pi-circle-fill text-[5px]"></i>
                    <p class="text-[10px]">{{ value }}</p>
                  </BaseButton>
                </motion.div>
              </div>
            </AnimatePresence>
          </div>

          <motion.div class="flex items-center mt-4 w-full sm:w-96">
            <BaseInput
              id="blogPostSearch"
              v-model="postSearch"
              label="Search posts"
              type="text"
              placeholder="Search posts.."
              class-name="bg-white"
            />
          </motion.div>
        </div>

        <AnimatePresence>
          <motion.div
            v-if="filteredBlogPosts.length > 5"
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :exit="{ opacity: 0, x: 20 }"
            :transition="{ duration: 0.3 }"
          >
            <PostPagination
              class="mt-10 lg:mt-0"
              :data-length="filteredBlogPosts.length"
              @on-page-change="updatePagination"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </header>

    <section class="mb-20 space-y-5">
      <div class="flex flex-col gap-2 m-auto w-full">
        <AnimatePresence>
          <div
            class="flex flex-wrap gap-10 justify-center h-auto p-1 md:p-8 text-sm md:text-xl text-center overflow-visible rounded-xl sm:rounded-2xl"
          >
            <motion.div
              v-for="(post, index) in paginatedPosts"
              :key="post.id"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :exit="{ opacity: 0 }"
              :transition="{ delay: index * 0.05, duration: 0.5 }"
              @click="selectPost(post?.article_title)"
            >
              <PostCard
                :title="post?.article_title"
                :cover-img="post?.cover_image"
                :country-name="post?.country.country_name"
                :date-created="post?.date_created"
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  </div>
</template>
