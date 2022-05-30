import styled from "styled-components"

export const Title = styled.h1`
  font-family: 'Cormorant Garamond';
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme, isGreen }) => isGreen ? theme.colors.bgTextSand : theme.colors.textGreen};
  white-space: pre-line;
  width: ${({ isLong }) => (isLong ? "88%" : "auto")};
  margin-bottom: 0;
  text-align: center;
  width: 100%;
  margin-top: 0.16em;

  ${({ theme }) => theme.media.desktop} {
    margin-top: 0.67em;
    margin-bottom: ${({ isFinal }) => (isFinal ? "0" : "0.33em")};
    text-align: left;
  }
`