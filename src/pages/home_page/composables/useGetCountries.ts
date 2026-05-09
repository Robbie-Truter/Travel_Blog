import { useFetch } from '@/composables/useFetch';
import type { TCountry } from '@/types/countries';

export const useGetCountries = () => {
  return useFetch<TCountry[]>('/items/countries?sort=country_name', ['allCountries'], {
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
