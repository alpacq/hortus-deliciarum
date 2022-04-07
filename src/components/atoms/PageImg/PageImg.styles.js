import styled from "styled-components"

export const Wrapper = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${({ isFinal }) => (isFinal ? "100%" : "88%")};
  margin: 0;
  padding: 0;
  align-self: ${({ isFinal }) => (isFinal ? "flex-end" : "center")};
`

export const StyledImage = styled.img`
  height: 100%;
`