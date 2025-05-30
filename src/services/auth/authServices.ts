import { UserRegisterDto } from '@/app/(auth)/register/page';
import api from '../baseServices';
import { UserLoginDto } from '@/app/(auth)/login/page';

const url = '/auth';

export const getCurrentUserService = async () => {
  const response = await api.get(`${url}/me`, { withCredentials: true });
  return response.data;
};

export const registerService = async (formData: UserRegisterDto) => {
  const response = await api.post(`${url}/register`, formData);
  return response.data;
};

export const loginService = async (formData: UserLoginDto) => {
  const response = await api.post(`${url}/login`, formData, {
    withCredentials: true,
  });
  return response.data;
};

export const userActiveService = async (token: string) => {
  const response = await api.patch(`${url}/active-user/${token}`);
  return response.data;
};
