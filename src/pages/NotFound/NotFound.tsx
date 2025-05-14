import { useTranslation } from 'react-i18next';
import { Box } from 'shared/Box';
import { StyledLink } from 'shared/index';

export const NotFound = () => {
  const { t } = useTranslation('menu');
  return (
    <Box
      width="100vw"
      height="100vh"
      $justifyContent="center"
      $alignItems="center"
      $gap="30px"
      $flexDirection="column"
    >
      <Box as={'p'} $fontSize="28px" width="auto">
        {t('notFoundpage')}
      </Box>
      <StyledLink link="/">{t('go_home')}</StyledLink>
    </Box>
  );
};
