import styled from "styled-components"

export const Wrapper = styled.div`
  display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
  }
`