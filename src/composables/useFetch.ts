import { useQuery } from '@tanstack/vue-query';
import { get } from '@/util/apiHelper';

//Reusable composable for fetch data
import type { UseQueryOptions } from '@tanstack/vue-query';

type TQueryOptions = Omit<
  UseQueryOptions,
  'queryKey' | 'queryFn' | 'initialData'
>;
export function useFetch<TResponse>(
  url: string,
  key: string,
  options?: TQueryOptions
) {
  return useQuery<TResponse, Error>({
    queryKey: [key],
    refetchOnWindowFocus: false,
    queryFn: () => get<TResponse>(url),
    ...options,
  });
}
