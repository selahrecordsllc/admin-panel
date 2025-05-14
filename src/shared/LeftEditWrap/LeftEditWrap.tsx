import styled from 'styled-components';

export const LeftEdiTrWrap = styled.div`
  border-right: ${({ theme }) => theme.bottomLine};
  width: 100%;
  max-width: 753px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
