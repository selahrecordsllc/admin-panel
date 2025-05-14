import { StyledItem } from 'shared/index';
import styled from 'styled-components';

export const StyledExerciseItem = styled(StyledItem)`
  min-height: 68px;
  height: fit-content;
  > div {
    &:nth-child(1) {
      min-width: 196px;
    }
    &:nth-child(2) {
      min-width: 193px;
      flex-direction: column;
      gap: 4px;
    }
    &:nth-child(3) {
      min-width: 193px;
      flex-direction: column;
      gap: 4px;
    }
    /* &:nth-child(4) {
      min-width: 123px;
    } */
    &:nth-child(4) {
      min-width: 220px;
      align-items: center;
    }
    &:nth-child(5) {
      min-width: 220px;
      align-items: center;
    }
    &:nth-child(6) {
      min-width: 139px;
      justify-content: flex-end;
    }
  }
`;

export const PlayButton = styled.button`
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.colorText};
  color: ${({ theme }) => theme.colors.colorText};
  font-size: 14px;
  border-radius: 50%;
`;
