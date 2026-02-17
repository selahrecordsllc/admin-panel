import styled from 'styled-components';

export const VideoCardWrap = styled.div`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderInputGrey};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;

  max-height: 520px;

  background: #0b0b0c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const VideoOverlay = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.25) 100%
  );
`;

export const VideoMeta = styled.div`
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Badge = styled.span`
  flex: 0 0 auto;
  font-size: 12px;
  line-height: 1;
  padding: 6px 10px;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.colorText};
`;

export const ClearBtn = styled.button`
  flex: 0 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.borderInputGrey};
  background: transparent;
  color: ${({ theme }) => theme.colors.colorText};
  padding: 4px 12px;
  border-radius: 18px;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.errorRed};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
