import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isFinal }) => (isFinal ? "flex-start" : "center")};
  justify-content: space-between;
  white-space: pre-line;
  align-self: ${({ isFinal }) => (isFinal ? "start" : "center")};
  z-index: 99 !important;

  ${({ theme }) => theme.media.desktop} {
    flex: 60%;
    align-items: ${({ isCarousel }) => (isCarousel ? "center" : "flex-start")};
    justify-content: ${({ isCarousel }) => (isCarousel ? "center" : "space-between")};
  }
`