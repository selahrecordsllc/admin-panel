export const columns = [
  {
    labelKey: 'users:user',
    sortKey: 'name',
    isSortable: false,
    minWidth: '240px',
  },
  {
    labelKey: 'users:email',
    sortKey: 'createdAt',
    isSortable: false,
    minWidth: '230px',
  },
  {
    labelKey: 'users:subscriptionDate',
    sortKey: 'createdAt',
    isSortable: false,
    minWidth: '160px',
  },
  {
    labelKey: 'users:subscriptionUntil',
    sortKey: 'subscriptionUntil',
    isSortable: false,
    minWidth: '150px',
  },
  {
    labelKey: 'users:subscriptionStatus',
    sortKey: 'subscriptionStatus',
    isSortable: false,
    minWidth: '140px',
  },
  {
    labelKey: 'users:subscription',
    sortKey: 'subSku',
    isSortable: true,
    minWidth: '160px',
  },
];
