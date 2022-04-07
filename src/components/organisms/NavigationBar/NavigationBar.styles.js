import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
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

export const DropdownWrapper = styled.div`
  display: none;
  position: absolute;
  background: ${({ isGreen }) => (isGreen ? "rgba(80, 95, 93, 0.5)" : "rgba(223, 220, 217, 0.5)")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  z-index: 10;
  min-width: 285px;
  left: 0;
`

export const SubNavigationItem = styled(AnchorLink)`
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.white : theme.colors.textGreen)};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  z-index: 11;
  background: none;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ isGreen }) => (isGreen ? "rgba(80, 95, 93, 0.5)" : "rgba(219, 215, 212, 0.5)")};
  }
`

export const NavigationItemWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownWrapper} {
    display: flex;
    flex-direction: column;
  }
`

export const NavigationItem = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;  
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  cursor: pointer;
  z-index: 9;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({ isGreen }) => (isGreen ? "none" : "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.28))")};

  &:hover {
    font-weight: 600;
  }

  &.active {
    text-decoration: underline;
  }
`