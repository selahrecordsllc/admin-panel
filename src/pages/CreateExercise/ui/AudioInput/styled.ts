import styled from 'styled-components';

export const UploadButton = styled.button<{ $error?: boolean }>`
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid
    ${({ theme, $error }) =>
      !$error ? theme.colors.primary : theme.colors.errorRed};
  width: 43px;
  height: 43px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.errorRed : theme.colors.primary};
  svg {
    font-size: 20px;
  }
  &[disabled] {
    color: ${({ theme }) => theme.colors.greyColorText};
    border-color: ${({ theme }) => theme.colors.greyColorText};
    cursor: default;
  }
`;

export const ClearIcon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  right: -30px;
  top: 0;
  svg {
    color: ${({ theme }) => theme.colors.errorRed};
  }
`;
