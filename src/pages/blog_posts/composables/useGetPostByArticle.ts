import { useFetch } from '@/composables/useFetch';
import type { TAllPosts } from '@/types/posts';

export const useGetPostByArticle = (slug: string) => {
  return useFetch<TAllPosts[]>(
    `/items/posts?fields=*,country.country_name,location.location_name&filter[slug][_eq]=${slug}`,
    ['getPostByArticle', slug],
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
};
