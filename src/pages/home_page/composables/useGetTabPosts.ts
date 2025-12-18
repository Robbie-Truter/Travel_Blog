import { useFetch } from '@/composables/useFetch';
import type { TTabPosts } from '@/types/posts';

export const useGetTabPosts = () => {
  return useFetch<TTabPosts[]>(
    '/items/posts?filter[is_tab][_eq]=true&fields=article_title,cover_image,country.slug,country.country_name',
    ['tabPosts'],
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
};
