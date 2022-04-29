import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  padding-top: ${({ isAbsolute, absHeight }) => (isAbsolute ? `calc(${absHeight}px - 6vh)` : "0")};
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: ${({ isSmall }) => (isSmall ? "center" : "flex-start")};
  max-height: ${({ isSmall }) => (isSmall ? "80vh" : "auto")};
`

export const StyledImg = styled.img`
  width: 100%;
  max-height: ${({ isSmall }) => (isSmall ? "80vh" : "auto")};
`

export const AbsoluteImg = styled.img`
  position: absolute;
  right: -6vw;
  top: -6vh;
`