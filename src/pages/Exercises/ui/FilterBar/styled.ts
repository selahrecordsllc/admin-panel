import styled from 'styled-components';

export const FilterList = styled.ul`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  /* overflow: hidden; */
  max-height: 180px;
  overflow-y: auto;
`;

export const Filteritem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 6px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.pageBackground};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
