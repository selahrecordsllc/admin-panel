import { Box } from 'shared/Box';
import styled from 'styled-components';

export const Wrap = styled(Box)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url('/images/notes-bg.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% auto;
  img {
    width: 101px;
    margin-bottom: 30px;
  }
`;

export const FormWrap = styled(Box).attrs({ as: 'form' })`
  width: 447px;
  flex-direction: column;
  padding: 56px;
  gap: 24px;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 12px -1px rgba(129, 129, 129, 0.14);
  border-radius: 8px;
  h3 {
    display: block;
    font-size: 24px;
    margin: 0 auto 8px;
  }
  button {
    margin-top: 28px;
  }
`;
