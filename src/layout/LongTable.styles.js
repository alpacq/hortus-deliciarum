import styled from "styled-components"

export const LongColumnsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  margin: 0;

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    display: flex;
    gap: 1vw;
    margin: 3vh 0;
  }
`