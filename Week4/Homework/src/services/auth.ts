import type { SignupRequest, LoginRequest } from '@/types/auth';
import { requestPostFetch } from '@services/apiService';

export const signup = async (data: SignupRequest) => {
  return requestPostFetch('auth/signup', data);
};

export const signin = async (data: LoginRequest) => {
  return requestPostFetch('auth/signin', data);
};
