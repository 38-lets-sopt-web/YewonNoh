import { requestPostFetch } from '@services/apiService';

interface SignupRequest {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

interface LoginRequest {
  loginId: string;
  password: string;
}

export const signup = async (data: SignupRequest) => {
  return requestPostFetch('auth/signup', data);
};

export const signin = async (data: LoginRequest) => {
  return requestPostFetch('auth/signin', data);
};
