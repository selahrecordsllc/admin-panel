export type TTrainingTypesparams = {
  page?: string;
  limit?: string;
  order?: 1 | -1;
  sortBy?: string;
};

export type TTrainingType = {
  _id: string;
  title: string;
  createdAt: string;
  photo: string;
  updatedAt: string;
};

export type TTrainingTypesRes = { docs: TTrainingType[]; totalCount: number };
