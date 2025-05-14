import { styled } from 'styled-components';
import { TButtonStyledProps } from './types';
import { Link } from 'react-router-dom';

export const ButtonStyled = styled.button<TButtonStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s;
  svg {
    width: 20px;
    height: 20px;
  }

  ${({ theme, $variant = 'primary', disabled, fill, color, $mouseHoverBg }) => {
    const isDisabled = !!disabled;

    if ($variant === 'primary') {
      return `
        background-color: ${
          isDisabled ? theme.colors.disabledGrey : fill || theme.colors.primary
        };
        color: ${isDisabled ? theme.colors.greyColorText : color || '#fff'};
        border: 1px solid ${
          isDisabled ? theme.colors.disabledGrey : fill || theme.colors.primary
        };
        &:hover {
          background-color: ${
            isDisabled
              ? theme.colors.disabledGrey
              : $mouseHoverBg || theme.colors.hoverButton
          };
        }
      `;
    }

    if ($variant === 'secondary') {
      return `
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        &:hover {
          background-color: ${theme.colors.pageBackground};
        }
      `;
    }

    return '';
  }}
`;

export const LinkButton = styled(Link)<TButtonStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 950px;
  transition: background-color 0.3s;
  text-decoration: none;
  svg {
    width: 20px;
    height: 20px;
  }

  ${({ theme, $variant = 'primary', fill, color, $mouseHoverBg }) => {
    if ($variant === 'primary') {
      return `
        background-color: ${fill || theme.colors.primary};
        color: ${color || '#fff'};
        border: 1px solid ${fill || theme.colors.primary};
        &:hover {
          background-color: ${$mouseHoverBg || theme.colors.hoverButton};
        }
      `;
    }

    if ($variant === 'secondary') {
      return `
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        &:hover {
          background-color: ${theme.colors.pageBackground};
        }
      `;
    }

    return '';
  }}
`;
