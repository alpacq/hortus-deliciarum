import styled from "styled-components"

export const Wrapper = styled.div`
  width: ${({ isFinal }) => (isFinal ? "100%" : "88%")};
  margin-left: ${({ isFinal, isReversed }) => ((isFinal && !isReversed) ? "10%" : "0")};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ isFinal, isReversed }) => ((isFinal && !isReversed) ? "0" : "4vw")};
`