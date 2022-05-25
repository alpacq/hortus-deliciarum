import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.nav`
  width: 100%;
  height: 9vh;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.darkGreen : theme.colors.darkSand)};
  background-blend-mode: ${({ isGreen }) => (isGreen ? 'normal' : 'overlay')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0 12%;
  z-index: 100 !important;
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
  background: ${({ theme, isGreen }) => (isGreen ? theme.colors.dropdownGreenBg : theme.colors.dropdownSandBg)};
  box-shadow: 0px 4px 4px ${({ theme, isGreen }) => (isGreen ? theme.colors.footerGreen : theme.colors.sentBtnShadow)};
  border-radius: 4px;
  z-index: 10;
  min-width: 285px;
  left: 0;
`

export const SubNavigationItem = styled(Link)`
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.white : theme.colors.textGreen)};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  z-index: 999;
  background: none;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ theme, isGreen }) => (isGreen ? "rgba(33, 54, 52, 0.29)" : theme.colors.dropdownSandHoverBg)};
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
  z-index: 999;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;

  &.hover {
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }

  &.active {
    font-weight: 600;
  }
`

export const NavigationItemArrow = styled.img`
  width: 13px;
  height: 5.3px;
`