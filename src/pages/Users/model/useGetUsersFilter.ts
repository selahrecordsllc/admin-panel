import { formatISO, setHours, setMinutes } from 'date-fns';
import { TSubscription } from 'features/users';
import { useSearchParams } from 'react-router-dom';
type UpdateParamsMode = 'toggle' | 'replace';

export type TDefaultUsersParams = {
  dateRange: string[];
  page: string;
  limit: string;
  sortBy: string;
  order: '1' | '-1';
  status?: string;
  subSku: TSubscription[];
};

export const defaultParams: TDefaultUsersParams = {
  dateRange: [],
  page: '1',
  limit: '100',
  sortBy: 'createdAt',
  order: '-1',
  status: undefined,
  subSku: [],
};

export const useGetUsersFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);

  const updateParams = (
    updates: Partial<Record<keyof TDefaultUsersParams, string | string[] | null>>,
    mode: UpdateParamsMode = 'replace'
  ) => {
    setSearchParams(
      prev => {
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
            newParams[key] = value ?? '';
          }
        });

        return newParams;
      },
      { replace: true }
    );
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

  const handleDateRangeChange = (update: [Date | null, Date | null]) => {
    const [start, end] = update;

    const adjustedEnd = end ? setMinutes(setHours(end, 23), 59) : null;

    setSearchParams(prev => {
      const newParams = Object.fromEntries(prev.entries());
      newParams['dateRange'] = [
        start ? formatISO(start) : null,
        adjustedEnd ? formatISO(adjustedEnd) : null,
      ]
        .filter(Boolean)
        .join(',');
      return newParams;
    });
  };

  const rawParams = Object.fromEntries(searchParams.entries());

  const params = {
    ...defaultParams,
    ...rawParams,
    dateRange: rawParams.dateRange?.split(',') || [],
    subSku: rawParams.subSku ? (rawParams.subSku.split(',') as TSubscription[]) : [],
  } as TDefaultUsersParams;

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

  return {
    handleLimitPage,
    onPageClick,
    setSearchParams,
    handleDateRangeChange,
    updateParams,
    searchParams,
    onSortClick,
    onArrowClick,
    params,
  };
};
