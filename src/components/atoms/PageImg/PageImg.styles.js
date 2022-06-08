import styled from "styled-components"

export const Wrapper = styled.div`
  display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 85vw;
  max-height: 85vw;
  margin: 0;
  padding: 0;
  position: relative;  
  z-index: 1;

  ${({ theme }) => theme.media.desktop} {
    align-items: ${({ isFinal }) => (isFinal ? "flex-end" : "center")};
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
    flex: 40%;
    height: ${({ isFinal }) => (isFinal ? "100%" : "98%")};    
    max-height: ${({ isFinal }) => (isFinal ? "100%" : "98%")};
    max-width: 54.2rem;
  }
`

export const StyledImage = styled.img`
  object-fit: cover;
  object-position: ${({ isFinal }) => (isFinal ? "50% 0" : "center")};
  max-height: 85vw;
  width: 100%;

  ${({ theme }) => theme.media.desktop} {
    width: ${({ isFinal }) => (isFinal ? "auto" : "100%")};
    max-height: ${({ isFinal }) => (isFinal ? "90vh" : "98%")};   
    object-position: ${({ isFinal }) => (isFinal ? "bottom" : "center")};
  }
`