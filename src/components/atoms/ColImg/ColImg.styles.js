import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ isSmall }) => (isSmall ? "center" : "flex-start")};
  max-height: ${({ isSmall }) => (isSmall ? "80vh" : "88vh")};
`

export const StyledImg = styled.img`
  width: 100%;
  max-height: ${({ isSmall }) => (isSmall ? "80vh" : "88vh")};
`