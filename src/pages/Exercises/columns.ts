export const columns = [
  {
    labelKey: 'exercises:exerciseName',
    sortKey: 'title',
    isSortable: true,
    minWidth: '196px',
  },
  {
    labelKey: 'exercises:trainingType',
    sortKey: 'type',
    isSortable: true,
    minWidth: '193px',
  },
  {
    labelKey: 'exercises:trainingLevel',
    sortKey: 'difficulty',
    isSortable: true,
    minWidth: '193px',
  },
  // {
  //   labelKey: 'exercises:duration',
  //   sortKey: 'createdAt',
  //   isSortable: false,
  //   minWidth: '123px',
  // },
  {
    labelKey: 'exercises:instruction',
    sortKey: 'createdAt',
    isSortable: false,
    minWidth: '220px',
  },
  {
    labelKey: 'exercises:exercise',
    sortKey: 'createdAt',
    isSortable: false,
    minWidth: '220px',
  },
  {
    labelKey: '',
    sortKey: 'subscriptionStatus',
    isSortable: false,
    minWidth: '139px',
  },
];
