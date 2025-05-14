import styled from 'styled-components';

export const Label = styled.p<{ $error: boolean }>`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.errorRed : theme.colors.colorText};
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  p {
    font-size: 16px;
  }
`;

export const Divider = styled.span`
  width: 100%;
  display: block;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.disabledGrey};
`;
