import { createTrainingTypes, editTrainingTypes } from 'features/index';
import { TextInfo, Title, UploadButton, Wrapper } from './styled';
import { Box, Button, Inputs } from 'shared/index';
import { useTranslation } from 'react-i18next';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TCreateTypeForm, TProps, trainingTypeSchema } from './types';
import toast from 'react-hot-toast';
import { BsCloudUpload } from 'react-icons/bs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { PhotoWrap } from './ui';

export const CreateModal = ({
  closeModal,
  mutate,
  setModalCreate,
  item,
}: TProps) => {
  const { t } = useTranslation('training_types');

  const inputRef = useRef<HTMLInputElement | null>(null);
  const methods = useForm({
    resolver: zodResolver(trainingTypeSchema),
    defaultValues: { title: item?.title, photo: item?.photo },
  });
  const {
    handleSubmit,
    register,
    setValue,
    trigger,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<TCreateTypeForm> = async data => {
    try {
      const formData = new FormData();
      if (data.photo instanceof File) {
        formData.append('photo', data.photo);
      }
      formData.append('title', data.title);
      if (item) {
        await editTrainingTypes(item._id, formData);
      } else {
        await createTrainingTypes(formData);
      }

      mutate();
      setModalCreate?.(false);
      if (item) {
        toast.success(t('toast:editSuccess'));
      }
    } catch (error) {
      console.log(error);
      toast.error(t(!item ? 'toast:createError' : 'toast:editError'));
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    if (file && file.type !== 'image/png') {
      toast.error(t('note_format').split(',')[0]);
      return;
    } else {
      setValue('photo', file);
      trigger('photo');
    }
  };

  const onAddPhotoClick = () => inputRef.current?.click();

  return (
    <FormProvider {...methods}>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <label className="visually-hidden">
          <input
            ref={inputRef}
            type="file"
            accept=".png,image/png"
            onChange={handleFileChange}
          />
        </label>
        <Box
          $flexDirection="column"
          $gap="35px"
          width="350px"
          $justifyContent="center"
          $alignItems="center"
        >
          <Title>{t(item ? 'edit_training_type' : 'title')}</Title>
          <PhotoWrap />
          <Box $gap="12px" $alignItems="flex-end" $justifyContent="center">
            <UploadButton
              type="button"
              onClick={onAddPhotoClick}
              $error={!!errors?.photo?.message}
            >
              <BsCloudUpload />
            </UploadButton>
            <Inputs.Default
              width="290px"
              placeholder={t('placeholder')}
              label={t('name')}
              {...register('title')}
              error={errors?.title?.message}
            />
          </Box>
          <Box $flexDirection="column" $gap="12px">
            <TextInfo>{t('note')}</TextInfo>
            <TextInfo>{t('note_format')}</TextInfo>
          </Box>
        </Box>
        <Box $gap="20px" $margin="20px 0 0">
          <Button
            onClick={closeModal}
            variant="secondary"
            width="50%"
            type="button"
          >
            {t('button_close')}
          </Button>
          <Button
            width="50%"
            type="submit"
            disabled={methods.formState.isSubmitting}
          >
            {t(!item ? 'button_submit' : 'exercises:save')}
          </Button>
        </Box>
      </Wrapper>
    </FormProvider>
  );
};
