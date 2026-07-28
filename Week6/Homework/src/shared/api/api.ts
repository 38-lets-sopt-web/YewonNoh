import axiosInstance from './axiosInstance';

export const get = async <T>(url: string, params?: object) => {
  return axiosInstance.get<T>(url, {
    params,
  }) as Promise<T>;
};

export const post = async <T>(url: string, data?: object, params?: object) => {
  return axiosInstance.post<T>(url, data, {
    params,
  }) as Promise<T>;
};

export const del = async <T>(url: string, params?: object) => {
  return axiosInstance.delete<T>(url, {
    params,
  }) as Promise<T>;
};
