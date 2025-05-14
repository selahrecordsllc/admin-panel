import styled from 'styled-components';
import { Box } from '..';

export const UploadWrap = styled(Box)<{
  $round?: boolean;
  $error?: boolean;
}>`
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme, $error }) =>
    !$error ? theme.colors.primary : theme.colors.errorRed};
  justify-content: center;
  flex-direction: column;
  width: 219px;
  height: 219px;
  border: 1px dashed
    ${({ theme, $error }) =>
      !$error ? theme.colors.primary : theme.colors.errorRed};
  background-color: ${({ theme }) => theme.colors.pageBackground};
  border-radius: ${({ $round }) => ($round ? '50%' : '8px')};
  p {
    font-weight: 600;
    font-size: 14px;
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;
