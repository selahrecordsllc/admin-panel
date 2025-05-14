import { apiPrivate } from 'shared/api';
import { TTrainingTypesparams, TTrainingTypesRes } from './types';

export const getTrainingTypes = async (params?: TTrainingTypesparams) => {
  const { data } = await apiPrivate<TTrainingTypesRes>(
    `/api/admin/training/types`,
    { params }
  );
  return data;
};

export const createTrainingTypes = async (formData: FormData) => {
  await apiPrivate.post(`/api/admin/training/type`, formData);
};

export const deleteTrainingTypes = async (id: string) => {
  await apiPrivate.delete(`/api/admin/training/type/${id}`);
};

export const editTrainingTypes = async (id: string, formData: FormData) => {
  await apiPrivate.patch(`/api/admin/training/type/${id}`, formData);
};
