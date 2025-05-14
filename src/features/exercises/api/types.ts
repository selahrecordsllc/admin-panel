import { TTrainingType } from 'features/training-types';

export enum EExerciseDifficult {
  beginner = 'beginner',
  experienced = 'experienced',
  pro = 'pro',
}
export type TAudioInfo = {
  createdAt: string;
  lenth: number;
  title: string;
  updatedAt: string;
  url: string;
  _id: string;
};

export type TGetExercisesParams = {
  type?: string[];
  difficulty?: EExerciseDifficult[];
  page?: string;
  limit?: string;
  sortBy?: string;
  order: 1 | -1;
};

export type TExercise = {
  _id: string;
  difficulty?: EExerciseDifficult[];
  type?: TTrainingType[];
  manual?: TAudioInfo;
  url?: TAudioInfo;
  title: string;
};

export type TExrciseRes = {
  docs: TExercise[];
  totalCount: number;
};
