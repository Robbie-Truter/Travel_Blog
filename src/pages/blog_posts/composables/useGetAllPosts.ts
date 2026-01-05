import { useFetch } from '@/composables/useFetch';
import type { TAllPosts } from '@/types/posts';

export const useGetAllPosts = () => {
  return useFetch<TAllPosts[]>(
    'items/posts?fields=id,article_title,cover_image,date_created,country.country_name,country.flag_emoji,location.location_name&sort=-date_created',
    ['getAllPosts'],
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
};
