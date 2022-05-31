import styled from "styled-components"

export const Wrapper = styled.div`
  display: ${({ isDesktop }) => (isDesktop ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${({ hasMargin }) => (hasMargin ? "3vh" : "0")};

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
  }
`

export const StyledImg = styled.img`
  height: 100%;
`