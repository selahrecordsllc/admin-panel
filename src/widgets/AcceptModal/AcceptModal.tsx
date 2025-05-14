import { Box, Button, CustomImage } from 'shared/index';
import { Description, Title, Wrapper } from './styled';
import micro from '/images/micro.png';
import { useTranslation } from 'react-i18next';

type TProps = {
  onCloceClick?: () => void;
  onActionButtonClick?: () => void;
  actionButtonText?: string;
  title?: string;
  description?: string;
};

export const AcceptModal = ({
  actionButtonText,
  description,
  onActionButtonClick,
  onCloceClick,
  title,
}: TProps) => {
  const { t } = useTranslation('training_types');
  return (
    <Wrapper>
      <CustomImage src={micro} width="80px" height="80px" />
      <Title>{title || t('trainingTypeCreated_title')}</Title>
      <Description>
        {description || t('trainingTypeCreated_description')}
      </Description>
      <Box $gap="20px">
        <Button
          onClick={onCloceClick}
          variant="secondary"
          width="50%"
          type="button"
        >
          {t('button_close')}
        </Button>
        <Button onClick={onActionButtonClick} width="50%" type="button">
          {actionButtonText || t('create_new')}
        </Button>
      </Box>
    </Wrapper>
  );
};
