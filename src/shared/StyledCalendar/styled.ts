import styled from 'styled-components';

export const CalendarWrapper = styled.div<{ $zIndex: number }>`
  position: relative;
  z-index: ${({ $zIndex }) => $zIndex};
`;
export const CustomInputWrap = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border-radius: 50px;
  padding: 0px 12px;
  border: 1px solid
    ${({ theme, $isOpen }) =>
      $isOpen ? theme.colors.primary : theme.colors.greyColorText};
  color: ${({ theme }) => theme.colors.greyColorText};
  font-size: 14px;
  cursor: pointer;
  width: fit-content;
  height: 44px;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .calendar-icon {
    font-size: 20px;
    transition: color 0.3s;
    color: ${({ theme, $isOpen }) =>
      !$isOpen ? theme.colors.greyColorText : theme.colors.primary};
  }

  .clear-icon {
    font-size: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.greyColorText};
    margin-left: auto;
    &:hover {
      color: ${({ theme }) => theme.colors.errorRed};
    }
  }

  .datepicker-input {
    /* flex: 1; */
    height: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: ${({ theme }) => theme.colors.greyColorText};
    outline: none;
    cursor: pointer;
    padding: 0;
    width: 168px;
  }
`;
