import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  HeadingWrap,
  Modal,
  PageWrapper,
  useToggle,
} from 'shared';
import { IoIosArrowBack } from 'react-icons/io';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { exerciseSchema, TExerciseForm } from './types';
import { Spinner, Wrapper } from './styled';
import { MainInfo, UploadFiles } from './ui';
import {
  creteExerciseHandler,
  editExerciseHandler,
  setDefaultData,
} from './model';
import { AcceptModal } from 'widgets/index';
import { ERoutes } from 'shared/enums';
import { useGetExercise } from 'features/exercises';

const CreateExercise = () => {
  const { t } = useTranslation('exercises');
  const { id } = useParams();
  const navigate = useNavigate();

  const onBack = () => navigate(ERoutes.exercises);

  const { isOpen, toggle } = useToggle();
  const methods = useForm({
    resolver: zodResolver(exerciseSchema),
    defaultValues: { type: [], difficulty: [], manualLenth: 0, urlLenth: 0 },
    mode: 'onChange',
  });

  const { exercise } = useGetExercise(id, v =>
    setDefaultData(v, methods.reset)
  );

  const onSubmit: SubmitHandler<TExerciseForm> = async data => {
    if (!exercise) {
      const result = await creteExerciseHandler(data);
      if (result) {
        toggle();
      }
    } else {
      const result = await editExerciseHandler(data, exercise._id, exercise);
      if (result) {
        toggle();
      }
    }
  };

  const onGoToCreate = () => {
    methods.reset({ name: '', type: [], difficulty: [], manual: '', url: '' });
    toggle();
    navigate(ERoutes.exercises_create);
  };
  const oncloseModalClick = () => {
    toggle();
    navigate(ERoutes.exercises);
  };
  return (
    <FormProvider {...methods}>
      <Modal isOpen={isOpen} closeModal={oncloseModalClick}>
        <AcceptModal
          onCloceClick={oncloseModalClick}
          description={t('trainingSavedDescription')}
          title={t('trainingSavedTitle')}
          actionButtonText={t('createNew')}
          onActionButtonClick={onGoToCreate}
        />
      </Modal>
      <Box
        $flexDirection="column"
        as={'form'}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <HeadingWrap>
          <h2 onClick={onBack}>
            <IoIosArrowBack />
            {t('exercise')}
          </h2>
          <Button disabled={methods.formState.isSubmitting} type="submit">
            {methods.formState.isSubmitting && <Spinner />}{' '}
            {t(t(id ? 'save' : 'create'))}
          </Button>
        </HeadingWrap>
        <PageWrapper>
          <Wrapper>
            <MainInfo />
            <UploadFiles />
          </Wrapper>
        </PageWrapper>
      </Box>
    </FormProvider>
  );
};
export default CreateExercise;
