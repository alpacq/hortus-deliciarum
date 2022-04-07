import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: ${({ isTop }) => (isTop ? "3" : "0")};
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`