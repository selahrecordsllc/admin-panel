import { EExerciseDifficult, useGetExercises } from 'features/exercises';
import { useTranslation } from 'react-i18next';
import { Box } from 'shared/Box';
import { ERoutes } from 'shared/enums';
import { HeadingWrap, PageWrapper, StyledLink } from 'shared/index';
import { useGetExercisesFilter } from './model/useExercisesFilter';
import { BottomWrap, SortBar } from 'widgets/index';
import { columns } from './columns';
import { ExerciseItem, FilterBar, Filterlist } from './ui';

const Exercises = () => {
  const { t } = useTranslation('exercises');
  const { params, onSortClick, onArrowClick, handleLimitPage, onPageClick } =
    useGetExercisesFilter();

  const { exercisesData, mutate } = useGetExercises({
    ...params,
    order: +params.order as 1 | -1,
    difficulty: params.difficulty as EExerciseDifficult[],
  });

  return (
    <Box $flexDirection="column">
      <HeadingWrap>
        <h2>{t('exercises')}</h2>
        <StyledLink link={ERoutes.exercises_create}>
          {t('createNew')}
        </StyledLink>
      </HeadingWrap>
      <PageWrapper>
        <FilterBar />
        <Filterlist />
        <SortBar
          currentSortKey={params.sortBy}
          columns={columns}
          currentOrder={+params.order as 1 | -1}
          onSort={onSortClick}
          onToggleOrder={onArrowClick}
        />
        <Box as={'ul'} $flexDirection="column">
          {exercisesData?.docs?.map(el => (
            <ExerciseItem item={el} key={el._id} mutate={mutate} />
          ))}
        </Box>
        <BottomWrap
          forcePage={+params.page}
          listLength={exercisesData?.docs?.length || 0}
          totalCount={exercisesData?.totalCount || 0}
          onPageChange={onPageClick}
          changeShowCount={handleLimitPage}
          showCount={params.limit}
        />
      </PageWrapper>
    </Box>
  );
};

export default Exercises;
