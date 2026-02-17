import { StyledItem } from 'shared/index';
import styled from 'styled-components';

export const UserItemStyled = styled(StyledItem)`
  > div {
    &:nth-child(1) {
      min-width: 240px;
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
      min-width: 230px;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
    &:nth-child(3) {
      min-width: 160px;
    }
    &:nth-child(4) {
      min-width: 150px;
    }
    &:nth-child(5) {
      min-width: 140px;
      align-items: center;
    }

    &:nth-child(6) {
      min-width: 160px;
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
