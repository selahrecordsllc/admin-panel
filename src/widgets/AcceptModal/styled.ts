import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  padding: 24px 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0px 5px 10px 0px #81818129;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 10px 0;
`;

export const Description = styled.p`
  margin: 10px 0;
  text-align: center;
`;
