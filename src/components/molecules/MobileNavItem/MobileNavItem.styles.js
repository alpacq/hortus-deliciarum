import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 42vw;
  align-items: center;
  justify-content: space-between;
  margin: 5vh 0;
  align-self: center !important;

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`

export const StyledLink = styled.button`
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: none;
`

export const StyledArrow = styled.img`
  height: clamp(1rem, 0.5385rem + 1.2821vw, 3rem);
`