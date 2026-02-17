import { TextareaHTMLAttributes } from 'react';

export type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  width?: string;
  initial?: string;
  height?: string;
  border?: string;
  $background?: string;
  error?: string;
  label?: string;
  padding?: string;
  bottomError?: string;
};

export type TStyledTextareaProps = {
  border?: string;
  fill?: string;
  height?: string;
  $error?: string;
  $padding: string;
};

// Type for styled label
export type TStyledLabelProps = {
  width: string;
  $disabled?: boolean;
};
