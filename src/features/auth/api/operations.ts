import { apiPrivate } from 'shared/api';
import { TLogin, TTokenRes } from './types';

export const login = async (value: TLogin) => {
  const { data } = await apiPrivate.post<TTokenRes>(
    `/api/admin/auth/login`,
    value
  );
  return data;
};

export const refreshToken = async () => {
  const { data } = await apiPrivate.post<TTokenRes>(`/api/admin/auth/refresh`);
  return data;
};

export const logout = async () => {
  await apiPrivate.post('/api/admin/auth/logout');
};
