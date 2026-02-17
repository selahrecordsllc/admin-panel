import { useSearchParams } from 'react-router-dom';

export type TDefaultParams = {
  type: string[];
  page: string;
  limit: string;
  sortBy: string;
  order: '1' | '-1';
  difficulty: string[];
};
type UpdateParamsMode = 'toggle' | 'replace';

export const defaultParams: TDefaultParams = {
  type: [],
  page: '1',
  limit: '100',
  sortBy: 'createdAt',
  order: '-1',
  difficulty: [],
};

export const useGetExercisesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);

  const updateParams = (
    updates: Partial<Record<keyof TDefaultParams, string | string[] | null>>,
    mode: UpdateParamsMode = 'replace'
  ) => {
    setSearchParams(prev => {
      const newParams = Object.fromEntries(prev.entries());

      Object.entries(updates).forEach(([key, value]) => {
        const current = newParams[key]?.split(',') ?? [];

        if (value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
          delete newParams[key];
        } else if (Array.isArray(value)) {
          if (mode === 'replace') {
            newParams[key] = value.join(',');
          } else if (mode === 'toggle') {
            const updated = [...current];
            value.forEach(val => {
              const index = updated.indexOf(val);
              if (index !== -1) {
                updated.splice(index, 1);
              } else {
                updated.push(val);
              }
            });
            if (updated.length > 0) {
              newParams[key] = updated.join(',');
            } else {
              delete newParams[key];
            }
          }
        } else {
          newParams[key] = value;
        }
      });

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
    updateParams({ order: searchParams.get('order') === '1' ? '-1' : '1' });
  };

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
    updateParams({ page: (selected + 1).toString() });
  };
  const rawParams = Object.fromEntries(searchParams.entries());

  const params = {
    ...defaultParams,
    ...rawParams,
    type: searchParams.get('type') ? searchParams.get('type')?.split(',') : [],
    difficulty: searchParams.get('difficulty') ? searchParams.get('difficulty')?.split(',') : [],
  } as typeof defaultParams;

  return {
    handleLimitPage,
    onPageClick,
    setSearchParams,
    updateParams,
    searchParams,
    onSortClick,
    onArrowClick,
    params,
  };
};
