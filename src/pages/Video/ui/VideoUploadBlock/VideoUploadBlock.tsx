import { ChangeEvent, useRef } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Box } from 'shared/Box';
import { Upload } from 'shared/index';
import { VideoCard } from '../VideoCard/VideoCard';

type TProps = {
  title?: string;
  fileList: FileList | null;
  url: string | null;

  onFilesChange: (files: FileList | null) => void;
  onDelete: () => void;

  accept?: string;
};

export const VideoUploadBlock = ({
  title,
  fileList,
  url,
  onFilesChange,
  onDelete,
  accept = 'video/mp4',
}: TProps) => {
  const { t } = useTranslation('exercises');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onPick = () => inputRef.current?.click();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    onFilesChange(files && files.length ? files : null);
  };

  const isMp4 = (file: File) => file.type === 'video/mp4' || /\.mp4$/i.test(file.name);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(isMp4);

    if (!validFiles.length && droppedFiles.length) {
      toast.error(t('unsupportedType'));
      return;
    }

    onFilesChange(validFiles.length ? (validFiles as unknown as FileList) : null);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <Box $flexDirection="column" $gap="12px">
      {title ? <p style={{ fontWeight: 600 }}>{title}</p> : null}

      <input ref={inputRef} type="file" accept={accept} hidden onChange={onInputChange} />

      {!fileList?.length && !url ? (
        <Upload onClick={onPick} onDrop={onDrop} onDragOver={onDragOver} />
      ) : (
        <VideoCard fileList={fileList} url={url} deleteVideo={onDelete} />
      )}
    </Box>
  );
};
