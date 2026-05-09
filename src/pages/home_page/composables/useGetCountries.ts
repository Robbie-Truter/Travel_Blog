import { useFetch } from '@/composables/useFetch';

export type TCountry = {
  id: string;
  country_name: string;
  flag_emoji: string;
  // We can add more fields here if we add them to Directus later
};

export const useGetCountries = () => {
  return useFetch<TCountry[]>(
    '/items/countries?sort=country_name',
    ['allCountries'],
    {
      staleTime: 1000 * 60 * 60, // 1 hour
    }
  );
};
