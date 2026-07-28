export interface SignupRequest {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export interface LoginRequest {
  loginId: string;
  password: string;
}
