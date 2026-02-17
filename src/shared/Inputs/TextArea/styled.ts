import styled from 'styled-components';
import { TStyledLabelProps, TStyledTextareaProps } from './types';

export const StyledTextarea = styled.textarea<TStyledTextareaProps>`
  border-radius: 8px;
  box-sizing: border-box;
  display: block;
  outline: none;
  padding: ${({ $padding }) => $padding};
  border: 1px solid
    ${({ theme, $error }) =>
      !$error ? theme.colors.borderInputGrey : theme.colors.errorRed};
  height: ${({ height }) => height};
  width: 100%;
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

export const Label = styled.label<TStyledLabelProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 0;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.colorText};
  span {
    color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.disabledGrey : theme.colors.colorText};
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
  height: 30px;
`;
