import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  width: 85vw;
  height: ${({ isExpandable }) => (isExpandable ? "auto" : "80vh")};
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`

export const NavigationWithHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1vh;
`

export const NavigationWrapper = styled.div`
  display: ${({ isExpandable, isExpanded }) => (isExpandable ? isExpanded ? "flex" : "none" : "flex")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1vh;
`

export const DropdownWrapper = styled.div`
  position: absolute;
  width: 85vw;
  top: ${({ theme }) => `calc(3 * ${theme.fontSize.m} + 8vh)`};
  left: 0;
  border-radius: 0px 0px 2px 2px;
  display: ${({ isClicked }) => (isClicked ? "flex" : "none")};
  flex-direction: column;
  z-index: 900 !important;
`

export const ExpandButton = styled.button`
  margin-bottom: 2vh;
  text-transform: uppercase;
  text-decoration: none;  
  cursor: pointer;
  z-index: 9 !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background: ${({ theme, isClicked, isGreen }) => (isClicked ? theme.colors.activeMobileNavItem : isGreen ? theme.colors.bgTextSand : `rgba(250, 250, 250, 0.7)`)};
  backdrop-filter: blur(5px);
  border: ${({ isGreen }) => (isGreen ? "none" : `1px solid rgba(223, 220, 217, 0.7)`)};
  color: ${({ theme }) => theme.colors.textGreen};
  display: ${({ isExpandable, isExpanded }) => (isExpandable ? isExpanded ? "none" : "flex" : "none")};
  width: 100%;
  flex-direction: row;
  gap: 5vw;
  align-items: center;
  justify-content: center;  
  height: 7vh;
`

export const UnexpandButton = styled.button`
  margin-bottom: 2vh;
  text-transform: uppercase;
  text-decoration: none;  
  cursor: pointer;
  z-index: 9 !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background: ${({ theme, isClicked, isGreen }) => (isClicked ? theme.colors.activeMobileNavItem : isGreen ? theme.colors.bgTextSand : `rgba(250, 250, 250, 0.7)`)};
  backdrop-filter: blur(5px);
  border: ${({ isGreen }) => (isGreen ? "none" : `1px solid rgba(223, 220, 217, 0.7)`)};
  color: ${({ theme }) => theme.colors.textGreen};
  display: ${({ isExpandable, isExpanded }) => (isExpandable ? isExpanded ? "flex" : "none" : "none")};
  width: 100%;
  flex-direction: row;
  gap: 5vw;
  align-items: center;
  justify-content: center;  
  height: 7vh;
`

export const SubNavigationItem = styled(Link)`
  color: ${({ theme }) => theme.colors.textGreen};
  font-size: ${({ theme }) => theme.fontSize.mobile};
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 999 !important;
  height: 7vh;
  width: 85vw;
  background: ${({ theme }) => theme.colors.bgTextSand};
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.activeMobileNavItem};
  }

  &.active {
    background: ${({ theme }) => theme.colors.activeMobileNavItem};
  }
`

export const NavigationItemWrapper = styled.div`
  display: inline-block;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background: ${({ theme, isClicked, isGreen }) => (isClicked ? theme.colors.activeMobileNavItem : isGreen ? theme.colors.bgTextSand : `rgba(250, 250, 250, 0.7)`)};
  backdrop-filter: blur(5px);
  border-radius: 2px; 
  margin-bottom: 2vh;
  height: 7vh;
  z-index: 9 !important;
  border: ${({ isGreen }) => (isGreen ? "none" : `1px solid rgba(223, 220, 217, 0.7)`)};
`

export const NavigationItem = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;  
  font-size: ${({ theme }) => theme.fontSize.mobile};
  font-weight: 400;
  cursor: pointer;
  z-index: 9 !important;
  color: ${({ theme }) => theme.colors.textGreen};
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  height: 7vh;

  &.active {
    font-weight: 600;
  }
`

export const NavigationItemWithDropdown = styled.button`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;  
  font-size: ${({ theme }) => theme.fontSize.mobile};
  font-weight: ${({ isClicked }) => (isClicked ? "600" : "400")};
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 90 !important;
  color: ${({ theme }) => theme.colors.textGreen};
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  height: 7vh;
`

export const NavigationItemArrow = styled.img`
  width: 13px;
  height: 5.3px;
`

export const NavigationHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
`

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.textGreen};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.mobile};
  font-weight: 400;
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