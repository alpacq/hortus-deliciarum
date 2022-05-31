import styled from "styled-components"

export const Wrapper = styled.div`
  display: ${({ isDesktop }) => (isDesktop ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 85vw;
  height: 85vw;
  margin-bottom: ${({ hasMargin }) => (hasMargin ? "2vh" : "0")};

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
    height: auto;
    max-height: 98%;
    width: 73vw;
    margin-bottom: 0;
  }
`

export const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 85vw;

  ${({ theme }) => theme.media.desktop} {
    height: auto;
    max-height: 98%;  
  }
`