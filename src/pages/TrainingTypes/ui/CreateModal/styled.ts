import styled from 'styled-components';

export const Wrapper = styled.form`
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

export const UploadButton = styled.button<{ $error?: boolean }>`
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid
    ${({ theme, $error }) =>
      !$error ? theme.colors.primary : theme.colors.errorRed};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`;

export const TextInfo = styled.p`
  color: ${({ theme }) => theme.colors.greyColorText};
  font-size: 14px;
`;
