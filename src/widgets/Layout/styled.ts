import { Box } from 'shared';
import styled from 'styled-components';

export const LayoutWrap = styled(Box)`
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;
export const MainStyled = styled(Box).attrs({ as: 'main' })<{
  $isOpen: boolean;
}>`
  width: calc(100vw - 25px);
  margin: 64px 0 0 15px;
  ${({ $isOpen }) => $isOpen && `filter: blur(5px);`}
  transition:filter 0.3s;
  @media (min-width: 1200px) {
    filter: none;
    width: 100%;
    margin: 64px 0 0 228px;
  }
  @media (min-width: 1440px) {
    margin: 64px 0 0 257px;
  }
`;

export const SectionApp = styled.section<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 5;
  @media (min-width: 1200px) {
    transform: translateX(0);
  }
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s;

  width: 230px;
`;
