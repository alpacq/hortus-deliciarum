import styled from "styled-components"

export const SectionWrapper = styled.div`
  height: ${({ isFinal }) => (isFinal ? "91vh" : "calc(91vh - 40px)")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isCB }) => (isCB ? "flex-start" : "center")};
  position: relative;
  background: none;
  overflow: hidden;
  scroll-snap-align: start;
`

export const LongSectionWrapper = styled.div`
  margin-top: ${({ isMulti }) => (isMulti ? "5vh" : "0")};
  height: ${({ isMulti, longSectionHeight }) => (isMulti ? `calc(${longSectionHeight} * (91vh - 40px))` : "calc(100% - 9vh - 40px)")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: none;
`