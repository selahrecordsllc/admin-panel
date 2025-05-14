import { TExerciseForm } from 'pages/CreateExercise/types';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, RightEditWrap } from 'shared/index';

import { AudioInput } from '../AudioInput/AudioInput';

export const UploadFiles = () => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext<TExerciseForm>();
  const { t } = useTranslation('exercises');

  return (
    <RightEditWrap>
      <h3>{t('uploadFile')}</h3>
      <Box $flexDirection="column" $gap="20px">
        <AudioInput
          key={123}
          label={t('instruction')}
          fileField="manualFile"
          urlField="manual"
          errorFile={errors?.manualFile?.message}
          errorUrl={errors?.manual?.message}
          onMetadataLoad={value => setValue('manualLenth', value.duration)}
        />

        <AudioInput
          key={321}
          label={t('exercise')}
          fileField="urlFile"
          urlField="url"
          errorFile={errors?.urlFile?.message}
          errorUrl={errors?.url?.message}
          onMetadataLoad={value => setValue('urlLenth', value.duration)}
        />
      </Box>
    </RightEditWrap>
  );
};
