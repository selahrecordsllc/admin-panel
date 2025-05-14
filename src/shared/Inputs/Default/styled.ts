import styled from 'styled-components';

import { TStyledLabelProps, TStyledInputProps } from './types';

export const StyledInput = styled.input<TStyledInputProps>`
  border-radius: 8px;
  box-sizing: border-box;
  display: block;
  outline: none;
  padding: ${({ $padding }) => $padding};
  border: 1px solid
    ${({ theme, $error }) =>
      !$error ? theme.colors.borderInputGrey : theme.colors.errorRed};
  height: ${({ height }) => height};
  width: ${({ width, $withPrefix }) =>
    $withPrefix ? `calc(${width} - 50px)` : width};
  font-size: 16px;
  background-color: ${({ fill }) => fill};
  transition: border-color 0.2s;
  color: ${({ theme }) => theme.colors.colorText};
  &[disabled] {
    border: 1px solid ${({ theme }) => theme.colors.disabledGrey};
    background-color: ${({ theme }) => theme.colors.disabledGrey};
  }
  &:focus {
    border: 1px solid
      ${({ theme, $error }) =>
        !$error ? theme.colors.primary : theme.colors.errorRed};
  }
`;
export const ShowPasswordButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  left: 90%;
  bottom: 7px;
  cursor: pointer;
  opacity: 0.5;
  font-size: 12px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
// style for label
export const Label = styled.label<TStyledLabelProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 0;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.colorText};
  span {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
  }
`;
export const ErrorMessage = styled.div<{ $bottomError: string }>`
  position: absolute;
  font-size: 12px;
  bottom: ${({ $bottomError }) => $bottomError};
  color: ${({ theme }) => theme.colors.errorRed};
`;

export const Prefix = styled.div<{ height: string; $error: boolean }>`
  height: ${({ height }) => height};
  font-size: 16px;
  border-radius: 0 8px 8px 0;
  border: 1px solid
    ${({ theme, $error }) =>
      !$error ? theme.colors.borderInputGrey : theme.colors.errorRed};
  border-left: none;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
