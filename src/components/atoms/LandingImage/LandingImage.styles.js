import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  pointer-events: none;
  z-index: ${({ isTop }) => (isTop ? "101 !important;" : "0")};
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`