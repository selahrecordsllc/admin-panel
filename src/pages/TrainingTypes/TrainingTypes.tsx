import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  HeadingWrap,
  Modal,
  PageWrapper,
  useToggle,
} from 'shared';
import { CreateModal, TrainingTypeItem } from './ui';
import { useTrainingTypesParams } from './model/useTrainingTypesParams';
import { useGetTrainingTypes } from 'features/training-types';
import { AcceptModal, BottomWrap, SortBar } from 'widgets/index';
import { columns } from './columns';
import { useState } from 'react';

const TrainingTypes = () => {
  const { t } = useTranslation('training_types');
  const { isOpen, toggle } = useToggle();
  const [modalCreate, setModalCreate] = useState(true);
  const { params, onPageClick, onSortClick, onArrowClick, handleLimitPage } =
    useTrainingTypesParams();

  const { trainingTypesData, mutate } = useGetTrainingTypes({
    ...params,
    order: +params.order as 1 | -1,
  });

  const onCloseModal = () => {
    toggle();
    setTimeout(() => setModalCreate(true), 300);
  };

  const onBackCreate = () => setModalCreate(true);

  return (
    <Box $flexDirection="column">
      <Modal isOpen={isOpen} closeModal={onCloseModal}>
        {!modalCreate ? (
          <AcceptModal
            onCloceClick={onCloseModal}
            onActionButtonClick={onBackCreate}
          />
        ) : (
          <CreateModal
            setModalCreate={setModalCreate}
            closeModal={onCloseModal}
            mutate={mutate}
          />
        )}
      </Modal>
      <HeadingWrap>
        <h2>{t('menu:trainingType')}</h2>
        <Button onClick={toggle}>{t('create_new')}</Button>
      </HeadingWrap>
      <PageWrapper>
        <SortBar
          columns={columns}
          currentOrder={+params.order as 1 | -1}
          currentSortKey={params.sortBy}
          onSort={onSortClick}
          onToggleOrder={onArrowClick}
        />
        <Box as={'ul'} $flexDirection="column">
          {trainingTypesData?.docs?.map(el => (
            <TrainingTypeItem mutate={mutate} item={el} key={el._id} />
          ))}
        </Box>
        <BottomWrap
          forcePage={+params.page}
          listLength={trainingTypesData?.docs?.length || 0}
          showCount={params.limit}
          totalCount={trainingTypesData?.totalCount || 0}
          changeShowCount={handleLimitPage}
          onPageChange={onPageClick}
        />
      </PageWrapper>
    </Box>
  );
};

export default TrainingTypes;
