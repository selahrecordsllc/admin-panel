import { useTheme } from 'styled-components';
import { ButtonStyled } from './styled';
import { TButtonProps } from './types';

export const Button = ({
  width,
  height = '44px',
  type = 'button',
  onClick,
  color = '#ffffff',
  children,
  fill,
  borderColor,
  disabled = false,
  padding = '16px 28px',
  margin = '0',
  mouseHoverBg,
  variant,
}: TButtonProps) => {
  const theme = useTheme();
  return (
    <>
      <ButtonStyled
        fill={fill || theme.colors.primary}
        onClick={onClick}
        width={width}
        height={height}
        type={type}
        color={color}
        $borderColor={borderColor}
        disabled={disabled}
        $padding={padding}
        $margin={margin}
        $mouseHoverBg={mouseHoverBg}
        $variant={variant}
      >
        {children}
      </ButtonStyled>
    </>
  );
};
