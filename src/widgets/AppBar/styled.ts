import { Link, NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px; 
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    max-height: 500px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 213px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 10px 10px;
  box-shadow: 0px 6px 12px -1px rgba(129, 129, 129, 0.14);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  @media (min-width: 1440px) {
    width: 237px;
    padding: 0 20px 20px;
  }
`;
export const StyledLogo = styled(Link)`
  margin: 12px auto 18px 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    position: absolute;
    height: 1px;
    display: block;
    width: 270px;
    left: -20px;
    bottom: -13px;
    background-color: #ededed;
    @media (min-width: 1440px) {
      bottom: -13px;
    }
  }
  p {
    font-weight: 600;
    font-size: 20px;
    /* height: 14px; */
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

export const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  gap: 8px;
  white-space: wrap;
  overflow-wrap: break-word;
  font-weight: 400;
  svg {
    width: 24px;
    height: 24px;
  }
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    &::before {
      content: '';
      position: absolute;
      left: 4px;
      width: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
      height: 40px;
      display: block;
      z-index: 3;
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.43;
`;
export const ExitBtn = styled.button`
  margin-top: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.errorRed};
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0;
  img {
    margin-right: 8px;
    width: 25px;
    height: 25px;
  }
  svg {
    margin-right: 8px;
    width: 25px;
    height: 25px;
  }
`;
export const ElementLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
    width: 100%;
    align-items: center;
    height: 44px;
    gap: 8px;
    white-space: wrap;
    overflow-wrap: break-word;
    & + svg {
      width: 20px;
      height: 20px;
      transition: rotate 0.3s;
      &.up {
        rotate: 180deg;
      }
    }
  }

  cursor: pointer;
  font-weight: 400;
  svg {
    width: 24px;
    height: 24px;
  }
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.colorText};
    &::before {
      content: '';
      position: absolute;
      left: 4px;
      width: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
      height: 40px;
      display: block;
      z-index: 3;
    }
  }
`;

export const InternalLinkWrap = styled.div<{ $isVisible: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.3s
    ease-out;
`;

export const InternalLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-left: 33px;
  height: 44px;
  gap: 8px;

  white-space: wrap;
  overflow-wrap: break-word;
  width: 100%;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  font-weight: 400;
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.colorText};
    &::before {
      content: '';
      position: absolute;
      left: 4px;
      width: 2px;
      background-color: ${({ theme }) => theme.colors.colorText};
      height: 40px;
      display: block;
      z-index: 3;
    }
  }
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  right: 3px;
  svg {
    width: 26px;
    height: 26px;
  }
  display: flex;

  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    display: none;
  }
`;
