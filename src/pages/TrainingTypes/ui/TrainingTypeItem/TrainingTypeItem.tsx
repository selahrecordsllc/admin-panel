import {
  deleteTrainingTypes,
  TTrainingType,
  TTrainingTypesRes,
} from 'features/training-types';
import { KeyedMutator } from 'swr';
import { StyledTypeItem } from './styled,';
import { CustomImage, EditButton, Modal, useToggle } from 'shared/index';
import { IoTrashBinOutline } from 'react-icons/io5';
import { DeleteModal } from 'widgets/DeleteModal/DeleteModal';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CreateModal } from '../CreateModal/CreateModal';

const imageUrl = import.meta.env.VITE_BASE_URL;

type TProps = {
  item: TTrainingType;
  mutate: KeyedMutator<TTrainingTypesRes>;
};

export const TrainingTypeItem = ({ item, mutate }: TProps) => {
  const { t } = useTranslation('toast');
  const { isOpen, toggle } = useToggle();
  const { isOpen: editOpen, toggle: editToggle } = useToggle();
  const onDeleteClick = async () => {
    try {
      await deleteTrainingTypes(item._id);
      mutate();
      toggle();
      toast.success(t('deleteSuccess'));
    } catch (error) {
      console.log(error);
      toast.error(t('deleteError'));
    }
  };

  return (
    <>
      <Modal isOpen={editOpen} closeModal={editToggle}>
        <CreateModal
          setModalCreate={editToggle}
          closeModal={editToggle}
          mutate={mutate}
          item={item}
        />
      </Modal>
      <Modal isOpen={isOpen} closeModal={toggle}>
        <DeleteModal close={toggle} onDeleteClick={onDeleteClick} />
      </Modal>
      <StyledTypeItem>
        <div>
          <CustomImage
            width="50px"
            height="50px"
            $borderRaduis="50%"
            src={imageUrl + '/public/training-type/' + item.photo}
          />
        </div>
        <div>{item.title}</div>
        <div>
          <EditButton onClick={editToggle} />

          <EditButton outlined EditIcon={IoTrashBinOutline} onClick={toggle} />
        </div>
      </StyledTypeItem>
    </>
  );
};
