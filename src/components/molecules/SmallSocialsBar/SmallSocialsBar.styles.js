import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

export const StyledLogo = styled.img`
  width: 24px;
  height: 24px;
  opacity: ${({ isGreen }) => (isGreen ? "1" : "0.4")};
`