import { parseISO } from 'date-fns';
import { SUBSCRIPTION } from 'features/users';
import { useGetUsersFilter } from 'pages/Users/model/useGetUsersFilter';
import { useTranslation } from 'react-i18next';
import { Box, FilterBtn, StyledCalendar } from 'shared';
import { ClearLi, StatusList } from './styled';

export const Filterbar = () => {
  const { params, handleDateRangeChange, updateParams } = useGetUsersFilter();
  const [startDate, endDate] = params.dateRange;
  const { t } = useTranslation('users');

  const statusOptions = [
    { label: t('showAll'), value: undefined },
    { label: t('inactive'), value: 'inactive' },
    { label: t('active'), value: 'active' },
  ];

  const onSelectChange = (value: (typeof statusOptions)[0]) => {
    updateParams({ status: value.value || null, page: '1' });
  };

  const onSelectSubscription = (value: TSubscription[]) => {
    updateParams({ subSku: value ? value : [], page: '1' });
  };

  const clearSubscription = () => updateParams({ page: '1', subSku: [] });

  type TSubscription = (typeof SUBSCRIPTION)[number];

  const SUBSCRIPTION_GROUPS = {
    light_month: ['voicetraining_monthly'],
    light_year: ['voicetraining_yearly', 'voicetraining_yearly_new'],
    pro_month: ['voicetraining_pro_monthly'],
    pro_year: ['voicetraining_pro_yearly', 'voicetraining_yearly_pro_new'],
  } as const satisfies Record<string, TSubscription[]>;

  type TGroupKey = keyof typeof SUBSCRIPTION_GROUPS;

  const GROUP_KEYS = Object.keys(SUBSCRIPTION_GROUPS) as TGroupKey[];

  const isGroupActive = (key: TGroupKey) => {
    const groupItems = SUBSCRIPTION_GROUPS[key];
    return groupItems.every(sku => params.subSku.includes(sku));
  };

  const activeGroupsCount = GROUP_KEYS.filter(key => isGroupActive(key)).length;

  const subscriptionFilterValue = activeGroupsCount > 0 ? activeGroupsCount : t('showAll');
  return (
    <Box width="auto" $gap="20px">
      <div>
        <StyledCalendar
          isRange
          zIndex={1}
          onChange={handleDateRangeChange}
          value={[startDate ? parseISO(startDate) : null, endDate ? parseISO(endDate) : null]}
        />
      </div>
      <FilterBtn title={t('subscriptionType')} filterValue={subscriptionFilterValue}>
        <StatusList>
          {GROUP_KEYS.map(key => (
            <li
              key={key}
              onClick={() => onSelectSubscription(SUBSCRIPTION_GROUPS[key])}
              className={isGroupActive(key) ? 'active' : ''}
            >
              {t(`subscriptions.${key}`)}
            </li>
          ))}
          {params.subSku?.length ? (
            <ClearLi onClick={clearSubscription}>{t('exercises:clearAll')}</ClearLi>
          ) : null}
        </StatusList>
      </FilterBtn>
      <FilterBtn
        title={t('status')}
        filterValue={statusOptions.find(el => el.value === params.status)?.label || t('showAll')}
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
