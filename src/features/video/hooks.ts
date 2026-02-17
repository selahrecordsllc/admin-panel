import useSWR, { SWRConfiguration } from 'swr';
import { getVideo, TVideoRes } from './operations';

export const useGetVideo = (config?: SWRConfiguration<TVideoRes>) => {
  const { data, isLoading, mutate } = useSWR('getVideo', getVideo, config);
  return { data, isLoading, mutate };
};
