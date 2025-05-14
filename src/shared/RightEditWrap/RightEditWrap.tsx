import styled from 'styled-components';

export const RightEditWrap = styled.div`
  padding: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 753px;
  border-right: 1px solid ${({ theme }) => theme.colors.disabledGrey};
  @media (min-width: 1440px) {
    max-width: 410px;
    border: none;
  }
`;
