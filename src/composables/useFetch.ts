import { get } from '@/util/apiHelper';
import { useQuery } from '@tanstack/vue-query';

//Reusable composable for GET requests
import type { UseQueryOptions } from '@tanstack/vue-query';

type TQueryOptions = Omit<UseQueryOptions, 'queryKey' | 'queryFn' | 'initialData'>;

export function useFetch<TResponse>(url: string, key: string[], options?: TQueryOptions) {
  return useQuery<TResponse, Error>({
    queryKey: key,
    refetchOnWindowFocus: false,
    ...options,
    queryFn: () => get<TResponse>(url),
  });
}
