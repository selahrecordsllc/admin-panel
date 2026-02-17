import { useTranslation } from 'react-i18next';
import {
  Badge,
  ClearBtn,
  StyledVideo,
  VideoCardWrap,
  VideoFrame,
  VideoMeta,
  VideoOverlay,
} from './styled';

const baseUrl = import.meta.env.VITE_BASE_URL;

type VideoPreviewProps = {
  fileList?: FileList | null;
  url?: string | null;
  deleteVideo: () => void;
};

export const VideoCard = ({ fileList, url, deleteVideo }: VideoPreviewProps) => {
  const { t } = useTranslation('exercises');
  const generateSrc = () => {
    if (fileList?.length) {
      return URL.createObjectURL(fileList?.[0]);
    }
    if (url) {
      return baseUrl + '/public/video/' + url;
    }
    return null;
  };

  const srcVideo = generateSrc();

  if (!srcVideo) return null;

  return (
    <VideoCardWrap>
      <VideoFrame>
        <StyledVideo src={srcVideo} controls playsInline preload="metadata" />
        <VideoOverlay />
      </VideoFrame>

      <VideoMeta>
        <Badge>{fileList ? t('new') : t('saved')}</Badge>
        <ClearBtn type="button" onClick={deleteVideo}>
          {t('clear')}
        </ClearBtn>
      </VideoMeta>
    </VideoCardWrap>
  );
};
