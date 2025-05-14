import { Box } from 'shared/Box';
import styled from 'styled-components';

export const StyledHeader = styled(Box).attrs({ as: 'header' })`
  box-shadow: 0px 6px 12px -1px rgba(129, 129, 129, 0.14);
  align-items: center;
  height: 64px;
  width: 100%;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  @media (min-width: 1200px) {
    width: calc(100vw - 213px);
    left: 213px;
  }
  @media (min-width: 1440px) {
    left: 237px;
    width: calc(100vw - 237px);
  }
`;

export const BurgerButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  svg {
    width: 26px;
    height: 26px;
  }
  display: flex;

  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    display: none;
  }
`;
export const LangList = styled.ul`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.pageBackground};
    }
    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
