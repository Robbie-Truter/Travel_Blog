import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const createAxiosInstance = () => {
  return axios.create({
    baseURL: `${baseUrl}/items/`,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    transformResponse: [
      function (data) {
        return data;
      },
    ],
  });
};

export default createAxiosInstance;
