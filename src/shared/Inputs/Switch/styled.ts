import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const SwitchStyled = styled.div<{ $isOn: boolean }>`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: ${({ theme, $isOn }) =>
    $isOn ? theme.colors.primary : theme.colors.disabledGrey};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const Knob = styled.div<{ $isOn: boolean }>`
  position: absolute;
  top: 1px;
  left: ${props => (props.$isOn ? '21px' : '1px')};
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transition: left 0.2s;
`;
export const Title = styled.p`
  cursor: pointer;
`;
