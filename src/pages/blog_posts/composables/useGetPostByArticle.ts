// useGetPostByArticle.ts
import type { TAllPosts } from '@/types/posts';
import { get } from '@/util/apiHelper';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

export const useGetPostByArticle = (slugGetter: () => string) => {
  return useQuery<TAllPosts[], Error>({
    queryKey: computed(() => ['getPostByArticle', slugGetter()]),
    queryFn: () =>
      get<TAllPosts[]>(
        `/items/posts?fields=*,country.country_name,country.country_iso,country.flag_emoji,location.location_name&filter[slug][_eq]=${slugGetter()}`
      ),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
