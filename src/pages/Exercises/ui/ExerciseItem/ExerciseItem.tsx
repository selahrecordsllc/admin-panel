import { deleteExercise, TExercise, TExrciseRes } from 'features/exercises';
import { StyledExerciseItem } from './styled';
import { useTranslation } from 'react-i18next';
import { EditButton, Modal, useToggle } from 'shared/index';
import { IoTrashBinOutline } from 'react-icons/io5';
import { getLinkWithParams } from 'shared/utils';
import { ERoutes } from 'shared/enums';
import { DeleteModal } from 'widgets/index';
import { KeyedMutator } from 'swr';
import toast from 'react-hot-toast';
import { AudioPlayer } from 'entities/index';

type Tprops = { item: TExercise; mutate: KeyedMutator<TExrciseRes> };

const apiurl = import.meta.env.VITE_BASE_URL;

export const ExerciseItem = ({ item, mutate }: Tprops) => {
  const { t } = useTranslation('exercises');
  const { isOpen, toggle } = useToggle();

  const onDeleteClick = async () => {
    try {
      await deleteExercise(item._id);
      mutate();
      toggle();
      toast.success(t('toast:deleteSuccess'));
    } catch (error) {
      console.log(error);
      toast.error(t('toast:deleteError'));
    }
  };
  const audioUrl = item.url?.url?.startsWith('http')
    ? item.url?.url
    : apiurl + '/public/training/' + item.url?.url;
  const manual = item.manual?.url?.startsWith('http')
    ? item.manual?.url
    : apiurl + '/public/training/' + item.manual?.url;

  return (
    <>
      <Modal isOpen={isOpen} closeModal={toggle}>
        <DeleteModal close={toggle} onDeleteClick={onDeleteClick} />
      </Modal>
      <StyledExerciseItem>
        <div>{item.title}</div>
        <div>
          {item.type?.length
            ? item.type?.map((el, i) => <p key={el._id + i}>{el.title}</p>)
            : '-'}
        </div>
        <div>
          {item.difficulty?.length
            ? item.difficulty
                ?.sort((a, b) => a.localeCompare(b))
                ?.map((el, i) => <p key={el + i}>{t(el)}</p>)
            : '-'}
        </div>
        {/* <div>-</div> */}
        <div>
          <AudioPlayer src={manual} />
          {/* <Player controls>
            <source src={manual} />
          </Player> */}
        </div>
        <div>
          <AudioPlayer src={audioUrl} />
        </div>
        <div>
          <EditButton
            link={getLinkWithParams(ERoutes.exercises_edit, { id: item._id })}
          />
          <EditButton outlined EditIcon={IoTrashBinOutline} onClick={toggle} />
        </div>
      </StyledExerciseItem>
    </>
  );
};
