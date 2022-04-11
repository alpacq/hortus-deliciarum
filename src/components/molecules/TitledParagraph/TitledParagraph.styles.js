import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isCarousel }) => (isCarousel ? "center" : "flex-start")};
  justify-content: ${({ isCarousel }) => (isCarousel ? "center" : "space-between")};
  flex: 50%;
  white-space: pre-line;
`