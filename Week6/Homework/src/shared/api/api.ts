import axiosInstance from './axiosInstance';

export const get = async <T>(url: string, params?: object) => {
  return axiosInstance.get<T>(url, { params }) as Promise<T>;
};
