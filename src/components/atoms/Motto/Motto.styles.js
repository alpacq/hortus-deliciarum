import styled from "styled-components"

export const Wrapper = styled.div`
  position: ${({ isAbsolute }) => (isAbsolute ? "absolute" : "static")};
  bottom: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledSubheader = styled.h2`
  font-family: 'Cormorant Garamond';
  font-size: ${({ theme, isLarge }) => (isLarge ? theme.fontSize.l : theme.fontSize.ml)};
  font-style: italic;
  font-weight: ${({ isBold }) => (isBold ? "700" : "400")};
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
`