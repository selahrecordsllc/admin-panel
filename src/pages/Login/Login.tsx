import {
  Button,
  Inputs,
  setAuthTokenHeader,
  useAppDispatch,
} from 'shared/index';
import { FormWrap, Wrap } from './styled';
import { TFormTypes } from './types';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from 'shared/enums';
import { authActions, login } from 'features/auth';
import { toast } from 'react-hot-toast';

export const Login = () => {
  const { t } = useTranslation('menu');
  const length = 5;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TFormTypes>({ mode: 'all' });

  const onSubmit: SubmitHandler<TFormTypes> = async data => {
    try {
      const { accessToken } = await login(data);
      dispatch(authActions.enter(accessToken));
      setAuthTokenHeader(accessToken);
      navigate(ERoutes.home);
    } catch (error) {
      console.log(error);
      toast.error(t('toast:login_error'));
    }
  };

  return (
    <Wrap>
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <h3>{t('login')}</h3>
        <Inputs.Default
          {...register('email', {
            required: { value: true, message: t('errors:fieldRequired') },
          })}
          type="email"
          label={t('email')}
          placeholder={'yourmail@gmail.com'}
          error={errors.email?.message}
        />
        <Inputs.Default
          {...register('password', {
            required: t('errors:fieldRequired'),

            minLength: {
              value: length,
              message: t('errors:minimumLength', { number: length }),
            },
          })}
          type="password"
          label={t('password')}
          placeholder={t('password')}
          error={errors.password?.message}
        />

        <Button type="submit" width="100%" disabled={!isValid}>
          {t('enter')}
        </Button>
      </FormWrap>
    </Wrap>
  );
};
