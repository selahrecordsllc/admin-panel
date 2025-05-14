import { TExerciseForm } from 'pages/CreateExercise/types';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, Inputs, LeftEdiTrWrap } from 'shared/index';
import { CheckboxItem, Divider, Label } from './styled';
import { useGettrainingTypesInfinite } from 'features/training-types';
import { EExerciseDifficult } from 'features/exercises';

export const MainInfo = () => {
  const {
    setValue,
    watch,
    register,
    formState: { errors },
  } = useFormContext<TExerciseForm>();
  const { t } = useTranslation('exercises');

  const onChatChangeChange = (value: string, field: 'difficulty' | 'type') => {
    const currentValue = watch(field) || [];
    if (currentValue?.includes(value)) {
      setValue(
        field,
        currentValue.filter(el => el !== value),
        { shouldValidate: true }
      );
    } else {
      setValue(field, [...currentValue, value], { shouldValidate: true });
    }
  };

  const dificulty = Object.values(EExerciseDifficult)?.map(el => ({
    label: t(el),
    value: el,
  }));

  const { trainingTypes } = useGettrainingTypesInfinite({ limit: '100' });
  const typesOptions = trainingTypes?.map(el => ({
    label: el.title,
    value: el._id,
  }));

  return (
    <LeftEdiTrWrap>
      <h3>{t('mainInfo')}</h3>
      <Inputs.Default
        {...register('name')}
        label={t('exerciseName')}
        placeholder={t('exerciseName')}
        error={errors?.name?.message}
      />
      <Box $flexDirection="column" $gap="18px">
        <Label $error={!!errors?.type?.message}>{t('trainingType')}</Label>

        {typesOptions?.map(el => (
          <CheckboxItem
            key={el.value}
            onClick={() => onChatChangeChange(el.value, 'type')}
          >
            <Inputs.Checkbox value={watch('type')?.includes(el.value)} />
            <p>{el.label}</p>
          </CheckboxItem>
        ))}
      </Box>
      <Divider />
      <Box $flexDirection="column" $gap="18px">
        <Label $error={!!errors?.difficulty?.message}>
          {t('trainingLevel')}
        </Label>
        <Box $flexDirection="column" $gap="18px">
          {dificulty?.map(el => (
            <CheckboxItem
              key={el.value.toUpperCase()}
              onClick={() => onChatChangeChange(el.value, 'difficulty')}
            >
              <Inputs.Checkbox
                value={watch('difficulty')?.includes(el.value)}
              />
              <p>{el.label}</p>
            </CheckboxItem>
          ))}
        </Box>
      </Box>
    </LeftEdiTrWrap>
  );
};
