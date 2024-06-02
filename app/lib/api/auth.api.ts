import { UserModel } from '@/app/lib/domain/UserModel';
import './mocks/auth.api.mock';
import { httpApi } from '@/app/lib/api/http.api';
import { User } from 'next-auth';

export interface AuthData {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: UserModel;
}

export const login = (loginPayload: LoginRequest): Promise<User> =>
  httpApi.post<User>('login', { ...loginPayload }).then(({ data }) => data);
