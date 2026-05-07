import type { UpdateMemberRequest } from '@/types/member';
import { requestGetFetch, requestPatchFetch } from '@services/apiService';

export const getUser = async (userId: number) => {
  return requestGetFetch(`users/${userId}`);
};

export const getUserList = async () => {
  return requestGetFetch('users');
};

export const updateUser = async (userId: number, data: UpdateMemberRequest) => {
  return requestPatchFetch(`users/${userId}`, data);
};
