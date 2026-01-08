import axiosInstance from '@/api/axiosInstance';
import { AxiosResponse } from 'axios';

type TMethod = 'get' | 'post' | 'put' | 'delete';

//generic api helper using axios instance for default configurations
const apiHelper = async <TResponse, TPayload>(
  url: string,
  method: TMethod,
  data?: TPayload
): Promise<TResponse> => {
  try {
    const response: AxiosResponse = await axiosInstance().request({
      url,
      method,
      data,
    });

    // Directus wraps collection responses in a `data` property.
    // This checks for that wrapper and returns the inner array if it exists.
    if (response.data && response.data.data) {
      return response.data.data;
    }

    // Otherwise, return the response as is (for single items, etc.)
    return response.data;
  } catch (error) {
    console.error(`API error during ${method} request to ${url}:`, error);
    throw error;
  }
};

//CRUD actions
const get = <TResponse>(url: string) => apiHelper<TResponse, never>(url, 'get');

const post = <TResponse, TPayload>(url: string, data: TPayload) =>
  apiHelper<TResponse, TPayload>(url, 'post', data);

const put = <TResponse, TPayload>(url: string, data: TPayload) =>
  apiHelper<TResponse, TPayload>(url, 'put', data);

const del = <TResponse>(url: string) => apiHelper<TResponse, never>(url, 'delete');

export { del, get, post, put };
