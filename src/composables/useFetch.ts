import { useQuery } from '@tanstack/vue-query';
import { get } from '@/util/apiHelper';

//Reusable composable for fetch data
export function useFetch<TResponse>(url: string, key: string) {
  return useQuery<TResponse, Error>({
    queryKey: [key],
    queryFn: () => get<TResponse>(url),
  });
}
