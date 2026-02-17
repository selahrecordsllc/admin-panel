import { useSearchParams } from 'react-router-dom';

export type TDefaultParams = {
  page: string;
  limit: string;
  sortBy: string;
  order: '1' | '-1';
};
export const defaultParams: TDefaultParams = {
  page: '1',
  limit: '100',
  sortBy: 'createdAt',
  order: '-1',
};

export const useTrainingTypesParams = () => {
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);

  const updateParam = (name: keyof TDefaultParams, value: string | null) => {
    setSearchParams(prev => {
      const newParams = Object.fromEntries(prev.entries());
      if (!value) {
        delete newParams[name];
      } else {
        newParams[name] = value;
      }
      return newParams;
    });
  };

  const onSortClick = (sortingBy: string) => {
    setSearchParams(prev => {
      const newParams = Object.fromEntries(prev.entries());
      if (newParams.sortBy === sortingBy) {
        newParams.order = newParams.order === '1' ? '-1' : '1';
      } else {
        newParams.sortBy = sortingBy;
        newParams.order = '1';
      }
      return newParams;
    });
  };

  const onArrowClick = () => {
    updateParam('order', searchParams.get('order') === '1' ? '-1' : '1');
  };
  const rawParams = Object.fromEntries(searchParams.entries());

  const params = {
    ...defaultParams,
    ...rawParams,
  } as typeof defaultParams;

  const handleLimitPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(prev => {
      const param = Object.fromEntries(prev.entries());
      param.limit = e.target.value;
      param.page = '1';
      return param;
    });
  };

  const onPageClick = ({ selected }: { selected: number }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateParam('page', (selected + 1).toString());
  };

  return {
    handleLimitPage,
    onPageClick,
    setSearchParams,
    updateParam,
    searchParams,
    onSortClick,
    onArrowClick,
    params,
  };
};
