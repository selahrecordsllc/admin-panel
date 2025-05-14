import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
