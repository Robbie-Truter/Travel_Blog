import { AxiosResponse } from 'axios';
import axiosInstance from '@/api/axiosInstance';

type TMethod = 'get' | 'post' | 'put' | 'delete';

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

    return response.data;
  } catch (error) {
    console.error(`API error during ${method} request to ${url}:`, error);
    throw error;
  }
};

const get = <TResponse>(url: string) => apiHelper<TResponse, never>(url, 'get');

const post = <TResponse, TPayload>(url: string, data: TPayload) =>
  apiHelper<TResponse, TPayload>(url, 'post', data);

const put = <TResponse, TPayload>(url: string, data: TPayload) =>
  apiHelper<TResponse, TPayload>(url, 'put', data);

const del = <TResponse>(url: string) => apiHelper<TResponse, never>(url, 'delete');

export { get, post, put, del };
