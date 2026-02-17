import { useGetVideo } from 'features/video/hooks';
import { uploadVideo } from 'features/video/operations';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Box } from 'shared/Box';
import { Button, HeadingWrap, PageWrapper } from 'shared/index';
import { SubTitle } from './styled';
import { VideoUploadBlock } from './ui';

type TForm = {
  instructionFile: FileList | null;
  instructionUrl: string | null;

  trainingFile: FileList | null;
  trainingUrl: string | null;
};
const Video = () => {
  const { t } = useTranslation('exercises');

  const {
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TForm>();
  const { instructionFile, instructionUrl, trainingFile, trainingUrl } = watch();

  useGetVideo({
    onSuccess: data =>
      reset({
        instructionFile: null,
        instructionUrl: data.video,
        trainingFile: null,
        trainingUrl: data.warmUpVideo,
      }),
  });

  const onSubmit: SubmitHandler<TForm> = async data => {
    try {
      const formData = new FormData();
      if (data?.instructionFile?.length || data.trainingFile?.length) {
        if (data.instructionFile?.length) {
          formData.append('video', data.instructionFile?.[0]);
        }
        if (data?.trainingFile?.length) {
          formData.append('warmUpVideo', data.trainingFile?.[0]);
        }
        const { video, warmUpVideo } = await uploadVideo(formData);
        reset({
          instructionFile: null,
          instructionUrl: video,
          trainingFile: null,
          trainingUrl: warmUpVideo,
        });
      }

      toast.success(t('toast:editSuccess'));
    } catch {
      toast.error(t('toast:editError'));
    }
  };

  return (
    <Box $flexDirection="column">
      <HeadingWrap>
        <h2>{t('menu:video')}</h2>
      </HeadingWrap>
      <PageWrapper>
        <SubTitle> {t('mainInfo')}</SubTitle>
        <Box
          $padding="20px"
          $gap="24px"
          as={'form'}
          onSubmit={handleSubmit(onSubmit)}
          $flexDirection="column"
        >
          <Box $fontWeight="600">{t('supportsOnly')}</Box>
          <Box width="fit" $gap="60px">
            <VideoUploadBlock
              title={t('instructionVideo')}
              fileList={instructionFile}
              url={instructionUrl}
              onFilesChange={files => setValue('instructionFile', files)}
              onDelete={() => {
                setValue('instructionFile', null);
                setValue('instructionUrl', null);
              }}
            />

            <VideoUploadBlock
              title={t('trainingVideo')}
              fileList={trainingFile}
              url={trainingUrl}
              onFilesChange={files => setValue('trainingFile', files)}
              onDelete={() => {
                setValue('trainingFile', null);
                setValue('trainingUrl', null);
              }}
            />
          </Box>
          <Button
            disabled={(!instructionFile?.length && !trainingFile?.length) || isSubmitting}
            type="submit"
          >
            {t('change')}
          </Button>
        </Box>
      </PageWrapper>
    </Box>
  );
};

export default Video;
