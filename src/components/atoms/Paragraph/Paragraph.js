import styled from "styled-components"

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  line-height: clamp(2.4rem, 2.0308rem + 1.0256vw, 4rem);
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  text-align: ${({ isCarousel }) => (isCarousel ? "center" : "auto")};

  span {
    display: block;
    text-align: center;
    font-weight: bold;

    ${({ theme }) => theme.media.desktop} {
      display: initial;
      text-align: inherit;
      font-weight: normal;
    }
  }
`