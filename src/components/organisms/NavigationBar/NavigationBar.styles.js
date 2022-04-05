import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 105px;
  background: ${({ theme, isGreen }) => (isGreen ? theme.colors.darkGreen : theme.colors.darkSand)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12%;
  z-index: 2;
`

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const NavigationItem = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  cursor: pointer;
  z-index: 99;
`