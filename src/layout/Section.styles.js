import styled from "styled-components"

export const SectionWrapper = styled.div`
  height: 90vh;
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
  height: calc(100% - 10vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: none;
`