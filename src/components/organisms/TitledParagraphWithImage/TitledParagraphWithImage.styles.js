import styled from "styled-components"

export const Wrapper = styled.div`
  width: 88%;
  margin-left: ${({ isFinal, isReversed }) => ((isFinal && !isReversed) ? "6%" : "0")};
  margin-right: ${({ isFinal, isReversed }) => ((isFinal && !isReversed) ? "6%" : "0")};
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content:  ${({ isFinal, isReversed }) => ((isFinal && (!isReversed)) ? "left" : "center")};
  align-items: center;
  gap: ${({ isFinal, isReversed }) => ((isFinal && (!isReversed)) ? "0" : "4vw")};
`