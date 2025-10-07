import { useFetch } from '@/composables/useFetch';
import type { TLatestPosts } from '@/types/posts';

export const useGetLatestPosts = () => {
  return useFetch<TLatestPosts[]>(
    '/items/posts?sort=-date_created&limit=5&fields=article_title,cover_image,date_created,country.slug,country.country_name&filter[is_tab][_neq]=true',
    'latestPosts'
  );
};
