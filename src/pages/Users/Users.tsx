import { useGetUsers } from 'features/users';
import { useTranslation } from 'react-i18next';
import { Box, HeadingWrap, PageWrapper } from 'shared/index';
import { BottomWrap, SortBar } from 'widgets/index';
import { columns } from './column';
import { useGetUsersFilter } from './model/useGetUsersFilter';
import { Filterbar, UserItem } from './ui';

const Dashboard = () => {
  const { t } = useTranslation('users');
  const { params, onArrowClick, onSortClick, onPageClick, handleLimitPage } = useGetUsersFilter();

  const statusVariant = { inactive: false, active: true };

  const { usersData } = useGetUsers({
    sortBy: params.sortBy,
    order: +params.order as 1 | -1,
    page: params.page,
    limit: params.limit,
    isActive: params.status
      ? statusVariant[params.status as keyof typeof statusVariant]
      : undefined,
    endDate: params?.dateRange?.[1] || undefined,
    startDate: params?.dateRange?.[0] || undefined,
    subSku: params?.subSku?.length ? params.subSku : undefined,
  });

  return (
    <Box $flexDirection="column">
      <HeadingWrap>
        <h2>{t('menu:userList')}</h2>
        <Filterbar />
      </HeadingWrap>
      <PageWrapper>
        <SortBar
          columns={columns}
          currentOrder={+params.order as 1 | -1}
          currentSortKey={params.sortBy}
          onSort={onSortClick}
          onToggleOrder={onArrowClick}
        />
        <Box as={'ul'} $flexDirection="column">
          {usersData?.docs?.map(item => (
            <UserItem key={item._id} item={item} />
          ))}
        </Box>
        <BottomWrap
          forcePage={+params.page}
          listLength={usersData?.docs?.length || 0}
          showCount={params.limit}
          totalCount={usersData?.totalCount || 0}
          onPageChange={onPageClick}
          changeShowCount={handleLimitPage}
        />
      </PageWrapper>
    </Box>
  );
};

export default Dashboard;
