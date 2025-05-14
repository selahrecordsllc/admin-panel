import { ButtonHTMLAttributes, ReactNode } from 'react';

export type TButtonProps = {
  children?: ReactNode;
  fill?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  mouseHoverBg?: string;
  width?: string;
  height?: string;
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type TLinkProps = Omit<TButtonProps, 'disabled' | 'onClick' | 'type'> & {
  link?: string;
  variant?: 'primary' | 'secondary';
};
export type TButtonStyledProps = {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
  $borderColor?: string;
  $padding?: string;
  $margin?: string;
  $mouseHoverBg?: string;
  $variant?: 'primary' | 'secondary';
};
