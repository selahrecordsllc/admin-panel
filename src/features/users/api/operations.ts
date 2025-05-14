import { apiPrivate } from 'shared/api';
import { TUserResponse, TUsersParams } from './types';

export const getUsers = async (params: TUsersParams) => {
  const { data } = await apiPrivate<TUserResponse>(`/api/admin/admin/users`, {
    params,
  });
  return data;
};
