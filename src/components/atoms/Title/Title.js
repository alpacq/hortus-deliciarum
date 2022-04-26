import styled from "styled-components"

export const Title = styled.h1`
  font-family: 'Cormorant Garamond';
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme, isGreen }) => isGreen ? theme.colors.bgTextSand : theme.colors.textGreen};
  white-space: pre-line;
  width: ${({ isLong }) => (isLong ? "88%" : "auto")};
  margin-bottom: 0.33em;
`