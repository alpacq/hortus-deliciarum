import styled from "styled-components"

export const Wrapper = styled.div`
  display: ${({ isMobile }) => (isMobile ? "inline" : "none")};
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: ${({ isTop }) => (isTop ? "101 !important;" : "0")};
  width: 100vw;

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "inline")};
    width: clamp(118.3125px, 32.8646vw, 100%);
    top: 0 !important;
  }
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.media.desktop} {
    height: auto;
  }
`