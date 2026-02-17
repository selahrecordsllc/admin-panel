import { useTranslation } from 'react-i18next';
import { RiUploadFill } from 'react-icons/ri';
import { UploadWrap } from './styled';
import { UploadProps } from './types';

export const Upload = ({ isRound = false, onClick, onDrop, onDragOver, error }: UploadProps) => {
  const { t } = useTranslation('exercises');
  return (
    <UploadWrap
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      $round={isRound}
      $error={error}
    >
      <RiUploadFill />
      <p>{t('hint')}</p>
    </UploadWrap>
  );
};
