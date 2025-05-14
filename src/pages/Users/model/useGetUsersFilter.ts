import { formatISO, setHours, setMinutes } from 'date-fns';
import { useSearchParams } from 'react-router-dom';

export type TDefaultUsersParams = {
  dateRange: string[];
  page: string;
  limit: string;
  sortBy: string;
  order: '1' | '-1';
  status?: string;
};

export const defaultParams: TDefaultUsersParams = {
  dateRange: [],
  page: '1',
  limit: '10',
  sortBy: 'createdAt',
  order: '-1',
  status: undefined,
};

export const useGetUsersFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);

  const updateParam = (
    name: keyof TDefaultUsersParams,
    value: string | null
  ) => {
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
    updateParam('page', (selected + 1).toString());
  };

  return {
    handleLimitPage,
    onPageClick,
    setSearchParams,
    handleDateRangeChange,
    updateParam,
    searchParams,
    onSortClick,
    onArrowClick,
    params,
  };
};
