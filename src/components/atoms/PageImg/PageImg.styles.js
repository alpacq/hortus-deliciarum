import styled from "styled-components"

export const Wrapper = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 85vw;
  max-height: 40%;
  margin: 0;
  padding: 0;
  position: relative;  
  z-index: ${({ isFinal }) => (isFinal ? "99 !important;" : "1")};

  ${({ theme }) => theme.media.desktop} {
    height: ${({ isFinal }) => (isFinal ? "100%" : "98%")};    
    width: 100%;
  }
`

export const StyledImage = styled.img`
  max-height: 100%;

  ${({ theme }) => theme.media.desktop} {
    max-height: ${({ isFinal }) => (isFinal ? "95vh" : "98%")};   
  }
`