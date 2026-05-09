import { useFetch } from '@/composables/useFetch';
import type { TLatestPosts } from '@/types/posts';

export const useGetRelatedPosts = (countryName: string, currentPostSlug: string) => {
  return useFetch<TLatestPosts[]>(
    `/items/posts?filter[country][country_name][_eq]=${countryName}&filter[slug][_neq]=${currentPostSlug}&limit=3&fields=article_title,cover_image,slug,country.country_name`,
    ['relatedPosts', countryName, currentPostSlug],
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    }
  );
};
