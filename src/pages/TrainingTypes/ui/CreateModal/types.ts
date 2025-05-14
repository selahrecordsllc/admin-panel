import { TTrainingType, TTrainingTypesRes } from 'features/training-types';
import { t } from 'i18next';
import { Dispatch, SetStateAction } from 'react';
import { KeyedMutator } from 'swr';
import { z } from 'zod';

export const trainingTypeSchema = z.object({
  photo: z.union([z.instanceof(File), z.string()]),
  title: z.string().min(1, { message: t('errors:fieldRequired') }),
});

export type TProps = {
  closeModal: () => void;
  mutate: KeyedMutator<TTrainingTypesRes>;
  setModalCreate?: Dispatch<SetStateAction<boolean>>;
  item?: TTrainingType;
};

export type TCreateTypeForm = z.infer<typeof trainingTypeSchema>;
