import styled from "styled-components"

export const Wrapper = styled.div`
  width: 85%;
  margin-left: ${({ isFinal, isReversed }) => ((isFinal && !isReversed) ? "6%" : "0")};
  margin-right: ${({ isFinal, isReversed }) => ((isFinal && !isReversed) ? "6%" : "0")};
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content:  ${({ isFinal, isReversed }) => ((isFinal && (!isReversed)) ? "flex-start" : "center")};
  align-items: center;
  gap: 0;

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    gap: ${({ isFinal, isReversed }) => ((isFinal && (!isReversed)) ? "0" : "4vw")};
    width: 88%;
  }
`