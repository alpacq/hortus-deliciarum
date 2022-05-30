import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;

  ${({ theme }) => theme.media.desktop} {
    top: 50vh;
    transform: translate(-50%, -50%);
  }
`

export const Logo = styled.img`
  height: 100%;
  width: 100%;
  min-width: 25rem;
`