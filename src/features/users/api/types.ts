export const SUBSCRIPTION = [
  'voicetraining_monthly',
  'voicetraining_yearly',
  'voicetraining_pro_monthly',
  'voicetraining_pro_yearly',
  'voicetraining_yearly_new',
  'voicetraining_yearly_pro_new',
] as const;

export type TSubscription = (typeof SUBSCRIPTION)[number];

export type TUsersParams = {
  page?: string;
  limit?: string;
  order?: 1 | -1;
  sortBy?: string;
  isActive?: boolean;
  startDate?: string;
  endDate?: string;
  subSku?: TSubscription[];
};

export type TUser = {
  _id: string;
  first_name: string;
  last_name: string;
  email?: string;
  authType: string;
  password: string;
  photo: string;
  firebaseId: string;
  createdAt: string;
  subDate: string;
  subSku: string;
  unSubDate: string;
};

export type TUserResponse = {
  docs: TUser[];
  totalCount: number;
};
