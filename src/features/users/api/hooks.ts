import useSWR from 'swr';
import { TUsersParams } from './types';
import { getUsers } from './operations';

export const useGetUsers = (params: TUsersParams) => {
  const {
    data: usersData,
    mutate,
    isLoading,
  } = useSWR(['getUsers', params], () => getUsers(params));
  return { usersData, mutate, isLoading };
};
