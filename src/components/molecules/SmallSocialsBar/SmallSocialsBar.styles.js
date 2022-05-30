import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

export const StyledLogo = styled.img`
  width: clamp(0.45rem, 1.25vw, 2.4rem);
  height: clamp(0.45rem, 1.25vw, 2.4rem);
  opacity: ${({ isGreen }) => (isGreen ? "1" : "0.4")};
`