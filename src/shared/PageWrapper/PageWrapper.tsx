import styled from 'styled-components';

type TProps = { $acuteAngle?: boolean; $minHeight?: string };

export const PageWrapper = styled.div<TProps>`
  width: 100%;
  min-height: ${({ $minHeight }) => $minHeight || '270px'};
  @media (min-width: 1200px) {
    width: calc(100vw - 247px);
  }
  @media (min-width: 1440px) {
    width: calc(100vw - 271px);
  }
  box-shadow: 0px 6px 12px -1px rgba(129, 129, 129, 0.14);
  border-radius: ${({ $acuteAngle }) =>
    $acuteAngle ? '0 0 16px 16px' : '16px'};
  background-color: #ffffff;
  margin-bottom: 20px;
  position: relative;
`;
