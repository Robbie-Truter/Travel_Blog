<script setup lang="ts">
// #NOTE: when clicking on Antalya on home page, navigate the blogs with search populated with antalya
// ------------ PostCards should not have locations like Antalya when navigating from home and you click Antalya, it should display posts under Antalya

// #NOTE: Fix bug: No posts displayed if I change filter with pagination > 1

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

// --- Composables ---
const {
  data: allPosts,
  isFetching: isAllPostsLoading,
  isError: hasAllPostsError,
  refetch: refetchAllPosts,
} = useGetAllPosts();

const router = useRouter();

// --- Computed Properties ---
// Retrieve list of countries for filters
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

// Retrieve list of locations for filters
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

// Filtered results
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

  // Search filtering for input
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

// Paginated results (used for the mapping)
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

const selectPost = (postSlug: string) => {
  if (postSlug) {
    router.push(`/blogs/${postSlug}`);
  }
};
</script>

<template>
  <div>
    <header class="space-y-7 mt-20 mb-15">
      <div
        class="flex flex-col gap-7 mx-auto w-[90%] p-7 rounded-4xl shadow-2xl bg-linear-to-br from-[#121212] via-[#1a1a1a] to-[#222222]"
      >
        <motion.div
          :initial="{ opacity: 0, y: -16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            type: 'spring',
            stiffness: 180,
            damping: 20,
            delay: 0.2,
          }"
        >
          <h1 class="text-color-primary font-bold mb-3 text-left drop-shadow-md">
            Ready for the next side quest?
          </h1>
          <p class="text-color-secondary font-bold text-left drop-shadow-sm">
            Join us as we explore new countries, sharing all the tips and tricks we wish we knew to
            make your travels easier!
          </p>
        </motion.div>

        <hr class="border-white/25 mt-5" />

        <div class="flex flex-wrap gap-3 justify-between w-full h-full">
          <div class="flex flex-col justify-start w-full lg:w-1/3 gap-4">
            <h2 class="text-color-secondary text-[23px] ml-1">Filters</h2>

            <!-- Filter loading -->
            <div
              v-if="isAllPostsLoading || hasAllPostsError"
              class="flex flex-wrap gap-4 mb-3 animate-pulse"
            >
              <div v-for="index in 4" :key="index" class="w-24 h-10 rounded-full bg-white/20"></div>
            </div>

            <!-- Filter populated -->
            <div v-else class="flex flex-wrap gap-4 mb-3">
              <!-- Country filters -->
              <motion.div
                :initial="{ opacity: 0, y: 12, scale: 0.98 }"
                :animate="{ opacity: 1, y: 0, scale: 1 }"
                :transition="{
                  type: 'spring',
                  stiffness: 220,
                  damping: 24,
                  delay: 0.1,
                }"
              >
                <BaseButton
                  :custom-class="[
                    selectedCountryFilter === 'All'
                      ? 'bg-color-primary/85 text-white shadow-lg'
                      : 'bg-white/20 text-white/90 shadow-md',
                    'flex items-center gap-2 px-4 py-2 rounded-full font-semibold backdrop-blur',
                  ]"
                  @click="applyCountryFilter('country', 'All')"
                >
                  <p>All</p>
                  <i class="pi pi-circle-fill text-[5px]!"></i>
                  <p class="text-[10px]">{{ countryFilters.totalPosts }}</p>
                </BaseButton>
              </motion.div>

              <motion.div
                v-for="(value, key, index) in countryFilters.allFilters"
                :key="key"
                :initial="{ opacity: 0, y: 12, scale: 0.98 }"
                :animate="{ opacity: 1, y: 0, scale: 1 }"
                :transition="{
                  type: 'spring',
                  stiffness: 220,
                  damping: 24,
                  delay: 0.12 + index * 0.04,
                }"
              >
                <BaseButton
                  :custom-class="[
                    selectedCountryFilter === key
                      ? 'bg-color-primary/85 text-white shadow-lg'
                      : 'bg-white/20 text-white/90 shadow-md',
                    'flex items-center gap-2 px-4 py-2 rounded-full font-semibold backdrop-blur',
                  ]"
                  @click="applyCountryFilter('country', key)"
                >
                  <p>{{ key }}</p>
                  <i class="pi pi-circle-fill text-[5px]!"></i>
                  <p class="text-[10px]">{{ value }}</p>
                </BaseButton>
              </motion.div>
            </div>

            <!-- Location Filters -->
            <div>
              <AnimatePresence>
                <div class="flex flex-wrap gap-4">
                  <motion.div
                    v-for="(value, key, index) in locationFilters"
                    :key="key"
                    :initial="{ opacity: 0, y: 20 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :exit="{ opacity: 0, y: 20 }"
                    :transition="{ delay: 0.1 + index * 0.06, duration: 0.3 }"
                  >
                    <BaseButton
                      size="xsm"
                      :custom-class="[
                        selectedLocationFilter === key
                          ? 'bg-color-primary/70 text-white shadow-md'
                          : 'bg-white/20 text-white/90 shadow-sm',
                        'flex items-center gap-2 px-3 py-1.5 rounded-full font-medium backdrop-blur',
                      ]"
                      @click="applyCountryFilter('location', key)"
                    >
                      <p>{{ key }}</p>
                      <i class="pi pi-circle-fill text-[5px]!"></i>
                      <p class="text-[10px]">{{ value }}</p>
                    </BaseButton>
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>
          </div>

          <!-- Right: Search -->
          <motion.div class="flex items-center mt-4 w-full sm:w-96">
            <BaseInput
              id="blogPostSearch"
              v-model="postSearch"
              label="Search posts"
              type="text"
              placeholder="Search posts..."
              class-name="bg-white/90 rounded-xl"
            />
          </motion.div>
        </div>

        <!-- Pagination -->
        <AnimatePresence>
          <motion.div
            v-if="filteredBlogPosts.length > 5"
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.3 }"
          >
            <PostPagination
              :data-length="filteredBlogPosts.length"
              @on-page-change="updatePagination"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </header>

    <motion.div
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ type: 'spring', stiffness: 180, damping: 20, delay: 0.2 }"
      class="mt-20 px-6 lg:px-20 xl:px-40"
    >
      <header class="mb-12 text-center">
        <h1 class="text-3xl font-bold tracking-tight mb-2">Blog Posts</h1>
        <p class="text-sm text-neutral-500 mb-6">Explore our latest travel adventures and tips</p>

        <div class="flex justify-center">
          <span class="h-[3px] w-10 rounded-full bg-[#EDB5BF]"></span>
        </div>
      </header>
    </motion.div>

    <!-- Post list view -->
    <section class="mb-20 space-y-5">
      <div class="flex flex-col gap-2 m-auto w-full">
        <AnimatePresence>
          <!-- Post loading -->
          <div
            v-if="isAllPostsLoading"
            class="flex flex-wrap gap-10 justify-center h-auto p-1 md:p-8 text-sm md:text-xl text-center overflow-visible rounded-xl sm:rounded-2xl"
          >
            <motion.div
              v-for="index in 5"
              :key="index"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :exit="{ opacity: 0 }"
              :transition="{ delay: index * 0.05, duration: 0.5 }"
            >
              <div
                class="bg-gray-300 animate-pulse w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-120 rounded-lg shadow-lg"
              ></div>
            </motion.div>
          </div>

          <!-- Post error -->
          <motion.div
            v-else-if="hasAllPostsError"
            :initial="{ opacity: 0, scale: 0.9 }"
            :animate="{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3, ease: 'easeInOut', duration: 0.3 },
            }"
            class="relative flex gap-2 self-center w-[90%] md:w-1/2 h-32 p-4 justify-center items-center mb-30 bg-color-secondary rounded-md border shadow-md"
          >
            <h3 class="text-shadow-sm font-bold">Something went wrong, please try again</h3>
            <span
              class="text-shadow-sm text-color-primary pi pi-exclamation-triangle text-2xl"
            ></span>
            <BaseButton
              custom-class="absolute top-0 right-0 mr-[-1px] mt-[-1px] w-fit rounded-r-md border p-[5px]! font-bold shadow-xl bg-color-primary"
              @click="refetchAllPosts"
            >
              <span class="text-shadow-sm pi pi-refresh text-[12px]"></span>
            </BaseButton>
          </motion.div>

          <!-- Post empty -->
          <motion.div
            v-else-if="!isAllPostsLoading && filteredBlogPosts.length === 0"
            :animate="{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3, ease: 'easeInOut', duration: 0.3 },
            }"
            :initial="{ opacity: 0, scale: 0.9 }"
            class="flex gap-2 self-center p-2 justify-center items-center mb-30 rounded-md border w-56 shadow-md bg-color-secondary"
          >
            <h3 class="text-shadow-sm font-bold">No posts found</h3>
            <span class="text-shadow-sm text-color-primary pi pi-search-minus"></span>
          </motion.div>

          <!-- Post populated -->
          <div
            v-else
            class="flex flex-wrap gap-10 justify-center h-auto p-1 md:p-8 text-sm md:text-xl text-center overflow-visible rounded-xl sm:rounded-2xl"
          >
            <motion.div
              v-for="(post, index) in paginatedPosts"
              :key="post.id"
              :initial="{ opacity: 0, y: 50, scale: 0.95 }"
              :animate="{ opacity: 1, y: 0, scale: 1 }"
              :transition="{
                type: 'spring',
                stiffness: 300,
                damping: 25,
                delay: index * 0.1,
              }"
              @click="selectPost(post?.slug)"
            >
              <PostCard
                :title="post?.article_title"
                :cover-img="post?.cover_image"
                :country-name="post?.country.country_name"
                :country-flag="post?.country?.flag_emoji"
                :date-created="post?.date_created"
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  </div>
</template>
