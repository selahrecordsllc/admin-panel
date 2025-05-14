import { apiPrivate } from 'shared/api';
import { TExercise, TExrciseRes, TGetExercisesParams } from './types';

export const getExercises = async (params: TGetExercisesParams) => {
  const { data } = await apiPrivate<TExrciseRes>(`/api/admin/training`, {
    params,
  });
  return data;
};

export const createExercise = async (formData: FormData) => {
  await apiPrivate.post(`/api/admin/training`, formData);
};

export const editExercise = async (formData: FormData, id: string) => {
  await apiPrivate.patch(`/api/admin/training/${id}`, formData);
};

export const getOneExercise = async (id: string) => {
  const { data } = await apiPrivate<TExercise[]>(`/api/admin/training/${id}`);
  return data;
};

export const deleteExercise = async (id: string) => {
  await apiPrivate.delete(`/api/admin/training/${id}`);
};
