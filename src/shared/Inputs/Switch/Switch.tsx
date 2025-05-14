import { Knob, SwitchContainer, SwitchStyled, Title } from './styled';
import { TSwitchProps } from './types';

export const Switch = ({ onChange, value = false, label }: TSwitchProps) => {
  return (
    <SwitchContainer>
      <SwitchStyled $isOn={value} onClick={onChange || undefined}>
        <Knob $isOn={value} />
      </SwitchStyled>
      {label && <Title onClick={onChange || undefined}>{label}</Title>}
    </SwitchContainer>
  );
};
