import { Label, StyledTextarea, ErrorMessage } from './styled';
import { TTextareaProps } from './types';
import React from 'react';
import { Box } from 'shared/Box';

export const TextArea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>(
  (
    {
      width = '335px',
      height = '100px',
      error,
      label,
      initial,
      disabled = false,
      $background = 'transparent',
      padding = '10px 12px',
      bottomError = '-31px',
      ...props
    },
    ref
  ) => {
    return (
      <Label width={width} $disabled={!!disabled}>
        {label && <span>{label}</span>}
        <Box>
          <StyledTextarea
            ref={ref}
            defaultValue={initial}
            disabled={disabled}
            height={height}
            fill={$background}
            $error={error}
            $padding={padding}
            {...props}
          />
        </Box>
        {error && !disabled && (
          <ErrorMessage $bottomError={bottomError}>{error}</ErrorMessage>
        )}
      </Label>
    );
  }
);
