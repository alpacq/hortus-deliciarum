import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  bottom: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledSubheader = styled.h2`
  font-family: 'Cormorant Garamond';
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: italic;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.bgTextSand};
`