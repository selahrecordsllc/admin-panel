import { useState } from 'react';
import {
  Label,
  StyledInput,
  ShowPasswordButton,
  ErrorMessage,
  Prefix,
} from './styled';
import { TInputProps } from './types';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const Default = ({
  width = '335px',
  height = '44px',
  error,
  type,
  label,
  hidepassword,
  $background = 'transparent',
  padding = '10px 12px',
  bottomError = '-16px',
  withPrefix,
  prefix,
  ...props
}: TInputProps) => {
  const [visiblePass, setVisiblePass] = useState(false);
  const typeAudit = type === 'password' && visiblePass ? 'text' : type;
  const isShowPassword = type === 'password' && !hidepassword;

  return (
    <Label width={width}>
      {label && <span>{label}</span>}
      <StyledInput
        $withPrefix={!!withPrefix}
        width={width}
        type={typeAudit}
        height={height}
        fill={$background}
        $error={error}
        $padding={padding}
        {...props}
      />
      {withPrefix && (
        <Prefix $error={!!error} height={height}>
          {prefix}
        </Prefix>
      )}
      {isShowPassword && (
        <ShowPasswordButton
          type="button"
          onClick={() => setVisiblePass(prev => !prev)}
        >
          {visiblePass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </ShowPasswordButton>
      )}
      {error && <ErrorMessage $bottomError={bottomError}>{error}</ErrorMessage>}
    </Label>
  );
};
