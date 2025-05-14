import { useTranslation } from 'react-i18next';
import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
  useLocation,
} from 'react-router-dom';
import { Button } from 'shared/index';
import { Buttons, Message, Title, Wrapper } from './styled';

const ErrorPage = () => {
  const { t } = useTranslation('menu');
  const navigate = useNavigate();
  const error = useRouteError();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  let errorMessage = t('unknownError');
  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} — ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Wrapper>
      <Title>{t('error_page_title')}</Title>
      <Message>
        {errorMessage} <br />
        <small>
          {t('error_on_page')}: {location.pathname}
        </small>
      </Message>
      <Buttons>
        <Button onClick={goBack}>{t('goBack')}</Button>
        <Button onClick={reloadPage}>{t('reload')}</Button>
      </Buttons>
    </Wrapper>
  );
};
export default ErrorPage;
