import { useTheme } from 'styled-components';
import { LinkButton } from './styled';
import { TLinkProps } from './types';
import { ERoutes } from 'shared/enums';

export const StyledLink = ({
  width,
  height = '44px',
  link = ERoutes.home,
  color = '#ffffff',
  children,
  fill,
  borderColor,
  padding = '16px 28px',
  margin = '0',
  mouseHoverBg,
  variant = 'primary',
}: TLinkProps) => {
  const theme = useTheme();

  return (
    <LinkButton
      $borderColor={borderColor}
      fill={fill || theme.colors.primary}
      to={link}
      width={width}
      height={height}
      color={color}
      $padding={padding}
      $margin={margin}
      $mouseHoverBg={mouseHoverBg}
      $variant={variant}
    >
      {children}
    </LinkButton>
  );
};
