import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { TTrainingTypesparams, TTrainingTypesRes } from './types';
import { getTrainingTypes } from './operations';

export const useGetTrainingTypes = (params?: TTrainingTypesparams) => {
  const {
    data: trainingTypesData,
    mutate,
    isLoading,
  } = useSWR(['gettrainingTypes', params], () => getTrainingTypes(params));
  return { trainingTypesData, mutate, isLoading };
};

export const useGettrainingTypesInfinite = (params?: TTrainingTypesparams) => {
  const getKey = (
    pageIndex: number,
    previousPageData: TTrainingTypesRes
  ): [string, TTrainingTypesparams] | null => {
    if (previousPageData && !previousPageData.docs?.length) return null;
    return [
      'getTrainingTypesInfinite',
      {
        ...params,
        page: (pageIndex + 1).toString(),
        limit: params?.limit || '50',
      },
    ];
  };
  const {
    data: trainingTypesData,
    mutate,
    isLoading,
    size,
    setSize,
  } = useSWRInfinite(getKey, ([, par]) => getTrainingTypes(par), {});
  const totalCount = trainingTypesData?.[0]?.totalCount || 0;
  const trainingTypes =
    trainingTypesData?.flatMap(item => item.docs.flat()) || [];
  const isReachingEnd = trainingTypes?.length === totalCount;
  const loadMore = () => {
    if (!isLoading && !isReachingEnd) {
      setSize(prev => prev + 1);
    }
  };
  return {
    loadMore,
    isReachingEnd,
    trainingTypes,
    totalCount,
    mutate,
    isLoading,
    size,
  };
};
