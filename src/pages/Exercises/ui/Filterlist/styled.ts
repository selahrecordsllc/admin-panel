import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 20px;
  border-top: ${({ theme }) => theme.bottomLine};
  border-bottom: ${({ theme }) => theme.bottomLine};
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

export const FilterItem = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  gap: 6px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.pageBackground};
  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.errorRed};
    font-size: 18px;
  }
`;
