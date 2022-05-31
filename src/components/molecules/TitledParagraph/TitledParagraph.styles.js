import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 85vw;
  align-items: ${({ isFinal }) => (isFinal ? "flex-start" : "center")};
  justify-content: space-between;
  white-space: pre-line;
  align-self: ${({ isFinal }) => (isFinal ? "start" : "center")};
  z-index: 99 !important;

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
    flex: 60%;
    max-width: 88vw;
    align-items: ${({ isCarousel }) => (isCarousel ? "center" : "flex-start")};
    justify-content: ${({ isCarousel }) => (isCarousel ? "center" : "space-between")};
  }
`