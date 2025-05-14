import styled from 'styled-components';

export const Wrap = styled.div<{ $width?: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  width: ${({ $width }) => $width || '100%'};
  height: 100%;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.disabledGrey};
  color: ${({ theme }) => theme.colors.colorText};
  transition: background-color 0.2s;
  flex-direction: column;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Time = styled.span`
  min-width: 72px;
  text-align: right;
  color: ${({ theme }) => theme.colors.greyColorText};
`;

export const Progress = styled.input`
  flex-grow: 1;
  height: 4px;
  background: ${({ theme }) => theme.colors.borderInputGrey};
  appearance: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
    /* transform: translateX(-1px); */
  }
`;
