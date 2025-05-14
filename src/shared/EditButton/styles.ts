import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonWrap = styled(Link)<{ $outlined?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${({ theme, $outlined }) =>
    $outlined ? theme.colors.white : theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  svg {
    color: ${({ theme, $outlined }) =>
      $outlined ? theme.colors.primary : theme.colors.white};
    width: 22px;
    height: 22px;
    transition: color 0.3s;
  }

  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ theme, $outlined }) =>
      !$outlined ? theme.colors.hoverButton : theme.colors.pageBackground};

    svg {
      svg {
        color: ${({ theme, $outlined }) =>
          !$outlined ? theme.colors.white : theme.colors.primary};
      }
    }
  }
`;
export const EditButtonStyled = styled.button<{ $outlined?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme, $outlined }) =>
    $outlined ? theme.colors.white : theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  svg {
    color: ${({ theme, $outlined }) =>
      $outlined ? theme.colors.primary : theme.colors.white};
    width: 22px;
    height: 22px;
    transition: color 0.3s;
  }

  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ theme, $outlined }) =>
      !$outlined ? theme.colors.hoverButton : theme.colors.pageBackground};
    svg {
      color: ${({ theme, $outlined }) =>
        !$outlined ? theme.colors.white : theme.colors.primary};
    }
  }
`;
