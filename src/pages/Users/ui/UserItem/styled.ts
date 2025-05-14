import { StyledItem } from 'shared/index';
import styled from 'styled-components';

export const UserItemStyled = styled(StyledItem)`
  > div {
    &:nth-child(1) {
      min-width: 281px;
      align-items: center;
      span {
        display: flex;
        flex-direction: column;
        gap: 6px;
        .name {
          color: ${({ theme }) => theme.colors.colorText};
          font-weight: 600;
        }
        .second-name {
          color: ${({ theme }) => theme.colors.greyColorText};
        }
      }
    }
    &:nth-child(2) {
      min-width: 251px;
    }
    &:nth-child(3) {
      min-width: 188px;
    }
    &:nth-child(4) {
      min-width: 160px;
    }
    &:nth-child(5) {
      min-width: 200px;
      align-items: center;
    }
  }
`;

export const StatusSpan = styled.p<{ $isActive?: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.statusGreen : theme.colors.errorRed};
`;
