import styled from "styled-components"

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  text-align: ${({ isCarousel }) => (isCarousel ? "center" : "auto")};
`