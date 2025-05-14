import { useState } from 'react';
import { DeleteButton, StyledImage, Wrapper } from './styled';
import { TCustomImageProps } from './types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CiImageOn } from 'react-icons/ci';

export const CustomImage = ({
  withDeleteIcon,
  onDeleteClick,
  onSVGClick,
  defaultIcon,
  $pointer,
  $borderRaduis = '8px',
  $aspectRatio,
  width = '219px',
  height = '219px',
  ...imgProps
}: TCustomImageProps) => {
  const [isBroken, setIsBroken] = useState(false);
  const showFallback = !imgProps.src || isBroken;

  return (
    <Wrapper width={width} height={height} $borderRaduis={$borderRaduis}>
      {!showFallback ? (
        <StyledImage
          {...imgProps}
          width={width}
          height={height}
          onClick={imgProps.onClick}
          onError={e => {
            setIsBroken(true);
            imgProps.onError?.(e);
          }}
          $pointer={!!imgProps.onClick || !!$pointer}
          $aspectRatio={$aspectRatio}
          $borderRaduis={$borderRaduis}
          $objectFit={imgProps.style?.objectFit || 'cover'}
        />
      ) : (
        defaultIcon ?? (
          <CiImageOn
            onClick={onSVGClick}
            style={{ cursor: onSVGClick ? 'pointer' : 'default' }}
          />
        )
      )}

      {withDeleteIcon && (
        <DeleteButton type="button" onClick={onDeleteClick}>
          <RiDeleteBinLine />
        </DeleteButton>
      )}
    </Wrapper>
  );
};
