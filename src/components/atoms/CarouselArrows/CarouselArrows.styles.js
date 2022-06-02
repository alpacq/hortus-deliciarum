import styled from "styled-components"

export const PrevButton = styled.button`
  position: absolute;
  cursor: pointer;
  left: 8vw;
  border: none;
  background: transparent;
  z-index: 999 !important;

  ${({ theme }) => theme.media.desktop} {
    left: 2vw;
    height: clamp(1.425rem, 3.9583vw, 7.6rem);
  }
`

export const NextButton = styled.button`
  position: absolute;
  cursor: pointer;
  right: 8vw;
  border: none; background: transparent;
  z-index: 999 !important;

  ${({ theme }) => theme.media.desktop} {
    right: 2vw;
    height: clamp(1.425rem, 3.9583vw, 7.6rem);
  }
`

export const MobileImg = styled.img`
  display: initial;

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`

export const DesktopImg = styled.img`
  display: none;
  height: clamp(1.425rem, 3.9583vw, 7.6rem);

  ${({ theme }) => theme.media.desktop} {
    display: initial;
  }
`