import styled from "styled-components"

export const SectionWrapper = styled.div`
  width: 100%;
  display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  overflow: hidden;
  scroll-snap-align: start;

  ${({ theme }) => theme.media.desktop} {
    height: 91vh; //${({ isFinal }) => (isFinal ? "91vh" : "calc(91vh - 40px) !important")};
    display: flex;
  }
`

export const LongSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  
  ${({ theme }) => theme.media.desktop} {
    width: 73%;
  }
`