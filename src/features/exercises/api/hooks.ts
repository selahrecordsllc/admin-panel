import useSWR from 'swr';
import { TExercise, TGetExercisesParams } from './types';
import { getExercises, getOneExercise } from './operations';

export const useGetExercises = (params: TGetExercisesParams) => {
  const {
    data: exercisesData,
    mutate,
    isLoading,
  } = useSWR(['getExercises', params], () => getExercises(params));
  return { exercisesData, mutate, isLoading };
};

export const useGetExercise = (
  id?: string,
  onSuccessLoad?: (data: TExercise) => void
) => {
  const { data, mutate, isLoading } = useSWR(
    id ? ['getExercise', id] : null,
    ([, id]) => getOneExercise(id),
    {
      onSuccess: v => onSuccessLoad && onSuccessLoad(v[0]),
    }
  );
  return { exercise: data?.[0], mutate, isLoading };
};
