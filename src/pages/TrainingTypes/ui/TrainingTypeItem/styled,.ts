import { StyledItem } from 'shared/index';
import styled from 'styled-components';

export const StyledTypeItem = styled(StyledItem)`
  > div {
    &:nth-child(1) {
      min-width: 100px;
    }
    &:nth-child(2) {
      min-width: 415px;
    }
    &:nth-child(3) {
      min-width: 100px;
      justify-content: flex-end;
    }
  }
`;

export const EditButton = styled.button``;
