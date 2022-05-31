import styled from "styled-components"

export const PrevButton = styled.button`
  position: absolute;
  cursor: pointer;
  left: -0.5vw;
  border: none;
  background: transparent;
  z-index: 999 !important;

  ${({ theme }) => theme.media.desktop} {
    left: 5rem;
  }
`

export const NextButton = styled.button`
  position: absolute;
  cursor: pointer;
  right: -0.5vw;
  border: none; background: transparent;
  z-index: 999 !important;

  ${({ theme }) => theme.media.desktop} {
    right: 5rem;
  }
`