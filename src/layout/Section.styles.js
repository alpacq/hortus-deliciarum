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
    height: ${({ isMultiCarousel }) => (isMultiCarousel ? "calc(91vh - 40px)" : "91vh")};
    display: flex;
  }
`

export const LongSectionWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  overflow-x: hidden;
  
  ${({ theme }) => theme.media.desktop} {
    width: 73%;
  }
`