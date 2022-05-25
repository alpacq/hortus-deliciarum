import styled from "styled-components"

export const Wrapper = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${({ isFinal }) => (isFinal ? "100%" : "88%")};
  margin: 0;
  padding: 0;
  position: relative;  
  z-index: ${({ isFinal }) => (isFinal ? "99 !important;" : "1")};
`

export const StyledImage = styled.img`
  height: ${({ isFinal }) => (isFinal ? "95vh" : "100%")};
`