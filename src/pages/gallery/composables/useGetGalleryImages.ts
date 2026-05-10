import { useFetch } from '@/composables/useFetch';
import type { TGalleryImage } from '@/types/gallery';

export const useGetGalleryImages = () => {
  return useFetch<TGalleryImage[]>(
    '/files?fields=id,title,description,type,width,height&filter[type][_contains]=image',
    ['galleryImages'],
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    }
  );
};
