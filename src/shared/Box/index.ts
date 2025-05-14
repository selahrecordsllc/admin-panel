import styled from 'styled-components';
import { BoxProps } from './types';

export const Box = styled.div<BoxProps>`
  display: flex;
  gap: ${props => props.$gap || '0'};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.$maxWidth || 'none'};
  min-width: ${props => props.$minWidth || 'none'};
  padding: ${props => props.$padding || '0'};
  margin: ${props => props.$margin || '0'};
  background-color: ${props => props.$bgColor || 'transparent'};
  flex-direction: ${props => props.$flexDirection || 'row'};
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  align-items: ${props => props.$alignItems || 'flex-start'};
  position: ${props => props.$position || 'static'};
  top: ${props => props.$top || 'auto'};
  right: ${props => props.$right || 'auto'};
  bottom: ${props => props.$bottom || 'auto'};
  left: ${props => props.$left || 'auto'};
  z-index: ${props => props.$zIndex || 'auto'};
  overflow: ${props => props.$overflow || 'visible'};
  color: ${props => props.color || 'inherit'};
  flex-wrap: ${props => props.$flexWrap || 'nowrap'};
  border-radius: ${props => props.$borderRadius || '0'};
  font-weight: ${props => props.$fontWeight || 'normal'};
  font-size: ${props => props.$fontSize || 'inherit'};
`;
