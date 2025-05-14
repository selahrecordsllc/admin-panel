import styled from 'styled-components';
import { TImageProps, TWrapperStyledProps } from './types';

export const Wrapper = styled.div<TWrapperStyledProps>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ $borderRaduis }) => $borderRaduis};

  &:hover {
    button {
      visibility: visible;
      opacity: 1;
    }
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.greyColorText};
  }
`;

export const StyledImage = styled.img<TImageProps>`
  width: 100%;
  height: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || 'auto'};
  border-radius: ${({ $borderRaduis }) => $borderRaduis};
  object-fit: ${({ $objectFit }) => $objectFit};
  cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'default')};
`;
export const DeleteButton = styled.button`
  &.delete_button {
    border: none;
    outline: none;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 6px;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    transition: opacity 0.3s, visibility 0.3s;
    svg {
      color: ${({ theme }) => theme.colors.errorRed};
      width: 18px;
      height: 18px;
    }
  }
`;
