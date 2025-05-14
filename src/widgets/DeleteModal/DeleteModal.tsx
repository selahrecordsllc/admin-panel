import { Box, Button } from 'shared';
import { DescriptionWrap, HeadingWrap, ModalWrap } from './styled';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';

type TProps = {
  close: () => void;
  onDeleteClick?: () => void;
  headingTitle?: string;
  descriptionText?: string;
  acceptText?: string;
  AcceptIcon?: IconType;
  hideIcon?: boolean;
};

export const DeleteModal = ({
  close,
  headingTitle,
  onDeleteClick,
  descriptionText,
  acceptText,
  AcceptIcon,
}: TProps) => {
  const { t } = useTranslation('menu');
  const title = headingTitle || t('delete');
  const description = descriptionText || t('you_realy_want_to_delete');

  return (
    <ModalWrap>
      <HeadingWrap>
        <p>{title}</p>
        <IoClose onClick={close} />
      </HeadingWrap>
      <DescriptionWrap>{description}</DescriptionWrap>
      <Box $justifyContent="flex-end" $gap="20px">
        <Button width="50%" type="button" onClick={close} variant="secondary">
          {t('cancel')}
        </Button>
        <Button width="50%" type="button" onClick={onDeleteClick}>
          {AcceptIcon ? <AcceptIcon /> : null} {acceptText || t('confirm')}
        </Button>
      </Box>
    </ModalWrap>
  );
};
