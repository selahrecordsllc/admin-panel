import { TExerciseForm } from 'pages/CreateExercise/types';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, Inputs, RightEditWrap } from 'shared/index';

import { AudioInput } from '../AudioInput/AudioInput';

export const UploadFiles = () => {
  const {
    formState: { errors },
    setValue,
    register,
    control,
  } = useFormContext<TExerciseForm>();
  const { t } = useTranslation('exercises');

  return (
    <RightEditWrap>
      <h3>{t('uploadFile')}</h3>
      <Box $flexDirection="column" $gap="20px">
        <AudioInput
          key={123}
          label={t('plus')}
          fileField="manualFile"
          urlField="manual"
          errorFile={errors?.manualFile?.message}
          errorUrl={errors?.manual?.message}
          onMetadataLoad={value => setValue('manualLenth', value.duration)}
        />

        <AudioInput
          key={321}
          label={t('minus')}
          fileField="urlFile"
          urlField="url"
          errorFile={errors?.urlFile?.message}
          errorUrl={errors?.url?.message}
          onMetadataLoad={value => setValue('urlLenth', value.duration)}
        />
      </Box>
      <Inputs.TextArea width="345px" {...register('description')} label={t('description')} />
      <Controller
        control={control}
        name="isFree"
        render={({ field: { value, onChange } }) => (
          <Box $gap="12px" onClick={() => onChange(!value)}>
            <Inputs.Checkbox value={value} />
            <Box width="fit-content" as={'p'}>
              {t('isFree')}
            </Box>
          </Box>
        )}
      />
    </RightEditWrap>
  );
};
