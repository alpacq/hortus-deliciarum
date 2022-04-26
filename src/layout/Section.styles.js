import styled from "styled-components"

export const SectionWrapper = styled.div`
  height: ${({ isFinal }) => (isFinal ? "91vh" : "calc(91vh - 40px)")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  overflow: hidden;
  scroll-snap-align: start;
`

export const LongSectionWrapper = styled.div`
  height: calc(100% - 9vh - 40px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: none;
`