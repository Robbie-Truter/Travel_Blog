import { useFetch } from '@/composables/useFetch';
import type { TAllPosts } from '@/types/posts';

export const useGetPostByArticle = (article_name: string) => {
  return useFetch<TAllPosts[]>(
    `items/posts?fields=*,country.country_name,location.location_name&filter[article_title][_eq]=${article_name}`,
    ['getPostByArticle', article_name],
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
};
