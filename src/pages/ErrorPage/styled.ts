import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  text-align: center;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.colorText};
`;
export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;
