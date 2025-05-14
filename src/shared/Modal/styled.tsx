import styled, { css, keyframes } from 'styled-components';
import { TModal } from './Modal';

/* animation visible */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

/* left-right */
const slideInLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideOutLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOutRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

/*  top/bottom*/
const slideInTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideOutTop = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const slideInBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const slideOutBottom = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;

/*  center */
const scaleUp = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

const scaleDown = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0.9); }
`;

export const Overlay = styled.div<{
  $justifyContent?: TModal['justifyContent'];
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: ${({ $justifyContent }) =>
    $justifyContent === 'left'
      ? 'flex-start'
      : $justifyContent === 'right'
      ? 'flex-end'
      : 'center'};
  align-items: ${({ $justifyContent }) =>
    $justifyContent === 'top'
      ? 'flex-start'
      : $justifyContent === 'bottom'
      ? 'flex-end'
      : 'center'};
  background-color: rgba(85, 85, 85, 0.5);

  z-index: 999;
  opacity: 0;
  opacity: 0;
  animation: ${fadeIn} 300ms ease-in-out forwards;

  &.closing {
    animation: ${fadeOut} 300ms ease-in-out forwards;
  }
`;

export const ModalWindow = styled.div<{
  $justifyContent?: TModal['justifyContent'];
}>`
  position: relative;

  max-height: 100vh;
  ${({ $justifyContent }) =>
    $justifyContent === 'left'
      ? css`
          transform: translateX(-100%);
          animation: ${slideInLeft} 300ms ease-in-out forwards;

          &.closing {
            animation: ${slideOutLeft} 300ms ease-in-out forwards;
          }
        `
      : $justifyContent === 'right'
      ? css`
          transform: translateX(100%);
          animation: ${slideInRight} 300ms ease-in-out forwards;

          &.closing {
            animation: ${slideOutRight} 300ms ease-in-out forwards;
          }
        `
      : $justifyContent === 'top'
      ? css`
          transform: translateY(-100%);
          animation: ${slideInTop} 300ms ease-in-out forwards;

          &.closing {
            animation: ${slideOutTop} 300ms ease-in-out forwards;
          }
        `
      : $justifyContent === 'bottom'
      ? css`
          transform: translateY(100%);
          animation: ${slideInBottom} 300ms ease-in-out forwards;

          &.closing {
            animation: ${slideOutBottom} 300ms ease-in-out forwards;
          }
        `
      : css`
          transform: scale(0.9);
          animation: ${scaleUp} 300ms ease-in-out forwards;

          &.closing {
            animation: ${scaleDown} 300ms ease-in-out forwards;
          }
        `}
`;
