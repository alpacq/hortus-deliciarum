import styled from "styled-components"

export const StyledLink = styled.a`
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  text-decoration: underline;
  text-decoration-thickness: 0.07em;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`