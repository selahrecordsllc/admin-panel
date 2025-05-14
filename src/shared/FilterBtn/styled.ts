import styled from 'styled-components';

export const FilterWrap = styled.div`
  position: relative;
  display: inline-block;
`;

export const FilterButton = styled.button<{
  $isOpen?: boolean;
  $height: string;
  $error?: boolean;
}>`
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  height: ${({ $height }) => $height};
  min-width: 128px;
  width: fit-content;
  gap: 8px;
  border-radius: 50px;
  border: 1px solid
    ${({ theme, $isOpen, $error }) =>
      $error
        ? theme.colors.errorRed
        : $isOpen
        ? theme.colors.primary
        : theme.colors.greyColorText};
  background-color: transparent;
  padding: 0 12px;
  color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors.primary : theme.colors.greyColorText};
  transition: color 0.3s, border-color 0.3s;
  svg {
    height: 20px;
    width: 20px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 999;
  padding-top: 10px;
  top: 100%;

  border-radius: 8px;
  background-color: transparent;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: -16px;
  color: ${({ theme }) => theme.colors.errorRed};
  height: 13px;
`;
