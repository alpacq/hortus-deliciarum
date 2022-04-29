import styled from "styled-components"

export const ColumnWrapper = styled.div`
  height: ${({ isSmall }) => (isSmall ? "88%" : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: ${({ isSmall }) => (isSmall ? "center" : "flex-start")};
  align-items: ${({ isSmall }) => (isSmall ? "center" : "flex-start")};
  flex: ${({ flexVal }) => flexVal};
  gap: 2vh;
`