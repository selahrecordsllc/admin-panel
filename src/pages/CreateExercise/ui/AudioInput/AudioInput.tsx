import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { Inputs, Box } from 'shared/index';
import { BsCloudUpload } from 'react-icons/bs';
import { ClearIcon, UploadButton } from './styled';
import { TExerciseForm } from 'pages/CreateExercise/types';
import { AudioPlayer } from 'entities/index';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

type AudioInputProps = {
  label: string;
  fileField: 'manualFile' | 'urlFile';
  urlField: 'manual' | 'url';
  errorFile?: string;
  errorUrl?: string;
  onMetadataLoad?: (meta: { duration: number; title?: string }) => void;
};

export const AudioInput = ({
  label,
  fileField,
  urlField,
  errorFile,
  errorUrl,
  onMetadataLoad,
}: AudioInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const {
    setValue,
    trigger,
    watch,
    setError,
    register,
    formState: { errors },
  } = useFormContext<TExerciseForm>();
  const { t } = useTranslation('errors');
  const file = watch(fileField);
  const url = watch(urlField);

  const onClick = () => inputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;

    setValue(fileField, f, { shouldValidate: true });
    trigger(urlField);
  };

  const audioSource = file ? URL.createObjectURL(file) : url;

  const onClearClick = () => {
    setValue(fileField, undefined);
    setValue(urlField, undefined);
  };
  return (
    <Box $gap="12px" $flexDirection="column">
      <Box width="auto" $gap="12px" $alignItems="flex-end" $position="relative">
        {file || url ? (
          <ClearIcon type="button" onClick={onClearClick}>
            <IoClose />
          </ClearIcon>
        ) : null}
        <Inputs.Default
          type="url"
          placeholder={!file ? 'https://link.com' : file.name}
          label={label}
          width="290px"
          {...register(urlField)}
          error={errorUrl}
          disabled={!!file}
        />
        <UploadButton
          type="button"
          onClick={onClick}
          disabled={!!url}
          $error={!!errorFile}
        >
          <BsCloudUpload />
        </UploadButton>
        <input
          ref={inputRef}
          type="file"
          accept="audio/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Box>

      {audioSource && !errors[urlField]?.message && (
        <AudioPlayer
          width="290px"
          src={audioSource}
          onMetadataLoad={onMetadataLoad}
          onError={() => {
            setError(
              urlField,
              {
                type: 'manual',
                message: t('invalidAudioLink'),
              },
              { shouldFocus: true }
            );
          }}
        />
      )}
    </Box>
  );
};
