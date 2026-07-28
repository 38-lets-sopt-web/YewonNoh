import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const requestGetFetch = async (url: string) => {
  const response = await instance.get(url);
  return response.data;
};

export const requestPostFetch = async (url: string, data: object) => {
  const response = await instance.post(url, data);
  return response.data;
};

export const requestPatchFetch = async (url: string, data: object) => {
  const response = await instance.patch(url, data);
  return response.data;
};
