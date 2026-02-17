import styled from 'styled-components';

export const StatusList = styled.ul`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.pageBackground};
    }
    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
export const ClearLi = styled.li`
  text-align: center;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.pageBackground};
  align-content: center;
`;
