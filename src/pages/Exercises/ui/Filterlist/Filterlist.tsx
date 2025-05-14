import { useGettrainingTypesInfinite } from 'features/training-types';
import { useGetExercisesFilter } from 'pages/Exercises/model/useExercisesFilter';
import { FilterItem, FilterWrapper } from './styled';
import { EExerciseDifficult } from 'features/exercises';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/index';
import { IoClose } from 'react-icons/io5';

export const Filterlist = () => {
  const { t } = useTranslation('exercises');

  const { params, updateParams } = useGetExercisesFilter();

  const { trainingTypes } = useGettrainingTypesInfinite({ limit: '100' });

  const dificulty = Object.values(EExerciseDifficult)
    ?.map(el => ({
      label: t(el),
      value: el,
    }))
    .filter(el => params.difficulty.includes(el.value));

  const typesOptions = trainingTypes
    ?.map(el => ({
      label: el.title,
      value: el._id,
    }))
    .filter(el => params.type.includes(el.value));
  const clearFilters = () => {
    updateParams({ type: [], difficulty: [] });
  };

  return dificulty?.length || typesOptions?.length ? (
    <FilterWrapper>
      <Button variant="secondary" height="36px" onClick={clearFilters}>
        {t('clearAll')}
      </Button>
      {typesOptions?.map(el => (
        <FilterItem
          key={el.value}
          onClick={() => updateParams({ type: [el.value] }, 'toggle')}
        >
          {el.label}
          <IoClose />
        </FilterItem>
      ))}
      {dificulty?.map(el => (
        <FilterItem
          onClick={() => updateParams({ difficulty: [el.value] }, 'toggle')}
          key={el.label}
        >
          {el.label}
          <IoClose />
        </FilterItem>
      ))}
    </FilterWrapper>
  ) : null;
};
