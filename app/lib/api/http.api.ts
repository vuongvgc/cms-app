import { ApiError } from '@/app/lib/api/ApiError';
import { readToken } from '@/app/lib/services/localStorage.service';
import axios, { AxiosError } from 'axios';

export const httpApi = axios.create({
  baseURL: process.env.BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  const headers = config.headers;
  headers.set('Authorization', `Bearer ${readToken()}`);
  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response) {
    const responseData = error.response.data as ApiErrorData;
    throw new ApiError<ApiErrorData>(
      responseData.message || error.message,
      responseData
    );
  } else {
    throw new ApiError<ApiErrorData>(error.message, undefined);
  }
});

export interface ApiErrorData {
  message: string;
}
