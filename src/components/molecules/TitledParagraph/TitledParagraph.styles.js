import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isCarousel }) => (isCarousel ? "center" : "flex-start")};
  justify-content: ${({ isCarousel }) => (isCarousel ? "center" : "space-between")};
  flex: 60%;
  white-space: pre-line;
  align-self: ${({ isFinal }) => (isFinal ? "start" : "center")};
`