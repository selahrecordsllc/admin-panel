import { EExerciseDifficult } from 'features/exercises';
import { useGettrainingTypesInfinite } from 'features/training-types';
import { useTranslation } from 'react-i18next';
import { Box, FilterBtn } from 'shared/index';
import { Filteritem, FilterList } from './styled';
import { useGetExercisesFilter } from 'pages/Exercises/model/useExercisesFilter';

export const FilterBar = () => {
  const { t } = useTranslation('exercises');

  const { params, updateParams } = useGetExercisesFilter();

  const { trainingTypes } = useGettrainingTypesInfinite({ limit: '100' });

  const typesOptions = trainingTypes?.map(el => ({
    label: el.title,
    value: el._id,
  }));
  const dificulty = Object.values(EExerciseDifficult)?.map(el => ({
    label: t(el),
    value: el,
  }));

  return (
    <Box $padding="20px" $gap="20px">
      <FilterBtn
        title={t('trainingType')}
        height="36px"
        filterValue={params.type?.length}
      >
        <FilterList>
          {typesOptions?.map(el => (
            <Filteritem
              onClick={() => updateParams({ type: [el.value] }, 'toggle')}
              className={
                params.type?.find(value => el.value === value) ? 'active' : ''
              }
              key={el.value}
            >
              {el.label}
            </Filteritem>
          ))}
        </FilterList>
      </FilterBtn>
      <FilterBtn
        title={t('trainingLevel')}
        height="36px"
        filterValue={params.difficulty?.length}
      >
        <FilterList>
          {dificulty?.map(el => (
            <Filteritem
              onClick={() => updateParams({ difficulty: [el.value] }, 'toggle')}
              className={params.difficulty?.includes(el.value) ? 'active' : ''}
              key={el.value}
            >
              {el.label}
            </Filteritem>
          ))}
        </FilterList>
      </FilterBtn>
    </Box>
  );
};
