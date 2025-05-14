import { parseISO } from 'date-fns';
import { useGetUsersFilter } from 'pages/Users/model/useGetUsersFilter';
import { useTranslation } from 'react-i18next';
import { Box, FilterBtn, StyledCalendar } from 'shared';
import { StatusList } from './styled';

export const Filterbar = () => {
  const { params, handleDateRangeChange, updateParam } = useGetUsersFilter();
  const [startDate, endDate] = params.dateRange;
  const { t } = useTranslation('users');

  const statusOptions = [
    { label: t('showAll'), value: undefined },
    { label: t('inactive'), value: 'inactive' },
    { label: t('active'), value: 'active' },
  ];

  const onSelectChange = (value: (typeof statusOptions)[0]) => {
    updateParam('status', value.value || null);
  };

  return (
    <Box width="auto" $gap="20px">
      <div>
        <StyledCalendar
          isRange
          zIndex={1}
          onChange={handleDateRangeChange}
          value={[
            startDate ? parseISO(startDate) : null,
            endDate ? parseISO(endDate) : null,
          ]}
        />
      </div>
      <FilterBtn
        filterValue={
          statusOptions.find(el => el.value === params.status)?.label ||
          t('showAll')
        }
      >
        <StatusList>
          {statusOptions.map((el, i) => (
            <li
              onClick={() => onSelectChange(el)}
              className={params.status === el.value ? 'active' : ''}
              key={i}
            >
              {el.label}
            </li>
          ))}
        </StatusList>
      </FilterBtn>
    </Box>
  );
};
