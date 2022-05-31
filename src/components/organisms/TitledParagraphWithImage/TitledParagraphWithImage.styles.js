import styled from "styled-components"

export const Wrapper = styled.div`
  width: 85%;
  margin-left: ${({ isFinal, isReversed }) => ((isFinal && !isReversed) ? "6%" : "0")};
  margin-right: ${({ isFinal, isReversed }) => ((isFinal && !isReversed) ? "6%" : "0")};
  height: 100%;
  display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0;

  ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: row;
    gap: ${({ isFinal, isReversed }) => ((isFinal && (!isReversed)) ? "0" : "4vw")};
    justify-content:  ${({ isFinal, isReversed }) => ((isFinal && (!isReversed)) ? "flex-start" : "center")};
    width: 88%;
  }
`