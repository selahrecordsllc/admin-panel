import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { Button, Progress, Time, Wrap } from './styled';
import { Box } from 'shared/Box';
import { FaDownload, FaPause, FaPlay } from 'react-icons/fa';

type Props = {
  src: string;
  width?: string;
  onError?: () => void;
  onMetadataLoad?: (meta: { duration: number; title?: string }) => void;
};
export const AudioPlayer = ({ src, width, onError, onMetadataLoad }: Props) => {
  const theme = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setTimeout(() => {
        const duration = audio.duration || 0;
        setDuration(duration);

        if (onMetadataLoad) {
          const filename = src.split('/').pop()?.split('?')[0];
          onMetadataLoad({ duration, title: filename });
        }
      }, 200);
    };
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
    };
  }, [onMetadataLoad, src]);

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${min}:${sec}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const progressBackground = `linear-gradient(to right,
  ${theme.colors.primary} 0%,
  ${theme.colors.primary} ${progressPercent}%,
  ${theme.colors.borderInputGrey} ${progressPercent}%,
  ${theme.colors.borderInputGrey} 100%)`;

  const handleDownload = async () => {
    const response = await fetch(src);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = src.split('/').pop() || 'audio.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Wrap $width={width}>
      <Box $alignItems="center" $gap="6px">
        <Button type="button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Progress
          type="range"
          min="0"
          max={duration}
          step="0.0001"
          value={currentTime}
          onChange={handleProgressChange}
          style={{ background: progressBackground }}
        />
      </Box>
      <Box $gap="20px" $justifyContent="center" $alignItems="center">
        {' '}
        <Time>
          {formatTime(currentTime)} / {formatTime(duration)}
        </Time>{' '}
        <Button type="button" onClick={handleDownload} title="Download">
          <FaDownload />
        </Button>
      </Box>

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        hidden
        onError={onError}
      />
    </Wrap>
  );
};
