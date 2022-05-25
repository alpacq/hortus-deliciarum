import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  pointer-events: none;
  z-index: ${({ isTop }) => (isTop ? "101 !important;" : "0")};
  width: clamp(118.3125px, 32.8646vw, 100%);
`

export const StyledImage = styled.img`
  width:  100%;
`