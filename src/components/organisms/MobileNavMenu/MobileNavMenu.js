import React, { useState } from "react"
import MobileNavItem from "../../molecules/MobileNavItem/MobileNavItem"
import { ExpandButton, NavigationHeader, DropdownWrapper, NavigationItemWithDropdown, NavigationItemWrapper, NavigationWrapper, SubNavigationItem, UnexpandButton, Wrapper, NavigationItem, NavigationItemArrow, NavigationWithHeaderWrapper, StyledText, StyledArrow } from "./MobileNavMenu.styles"
import arrowDown from "../../../images/mobileArrowDownSand.svg"
import arrowUp from "../../../images/mobileArrowUpSand.svg"
import arrowGreen from "../../../images/Group 22 (2).svg"
import arrowDownGreen from "../../../images/mobileArrowDownGreen.svg"

const MobileNavMenu = ({ isExpandable, isGreen }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <Wrapper isExpandable={isExpandable} isExpanded={isExpanded}>
      <NavigationWithHeaderWrapper>
        <NavigationHeader isGreen={isGreen}>wybierz z menu:</NavigationHeader>
        <ExpandButton isGreen={isGreen} isExpandable={isExpandable} isExpanded={isExpanded} onClick={() => setIsExpanded(true)}>
          <StyledArrow src={arrowDown} alt="" />
          <StyledText>rozwiń</StyledText>
          <StyledArrow src={arrowDown} alt="" />
        </ExpandButton>
        <NavigationWrapper isExpandable={isExpandable} isExpanded={isExpanded}>
          <NavigationItemWrapper isGreen={isGreen} isClicked={isClicked}>
            <NavigationItemWithDropdown isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
              oferta
              <NavigationItemArrow src={arrowGreen} alt="" />
            </NavigationItemWithDropdown>
          </NavigationItemWrapper>
          <NavigationItemWrapper isGreen={isGreen}>
            <NavigationItem to="/florystykaslubna" activeClassName="active">florystyka ślubna</NavigationItem>
          </NavigationItemWrapper>
          <NavigationItemWrapper isGreen={isGreen}>
            <NavigationItem to="/poznajnas" activeClassName="active">o nas</NavigationItem>
          </NavigationItemWrapper>
          <NavigationItemWrapper isGreen={isGreen}>
            <NavigationItem to="/kontakt" activeClassName="active">kontakt</NavigationItem>
          </NavigationItemWrapper>
          <UnexpandButton isGreen={isGreen} isExpandable={isExpandable} isExpanded={isExpanded} onClick={() => { setIsExpanded(false); setIsClicked(false); }}>
            <StyledArrow src={arrowUp} alt="" />
            <StyledText>zwiń</StyledText>
            <StyledArrow src={arrowUp} alt="" />
          </UnexpandButton>
        </NavigationWrapper>
      </NavigationWithHeaderWrapper>
      <DropdownWrapper isClicked={isClicked}>
        <SubNavigationItem to="/oferta#ciete">kwiaty cięte</SubNavigationItem>
        <SubNavigationItem to="/oferta#doniczkowe">rośliny doniczkowe</SubNavigationItem>
        <SubNavigationItem to="/oferta#dodatki">dodatki</SubNavigationItem>
        <SubNavigationItem to="/oferta#aranzacja">aranżacja przestrzeni</SubNavigationItem>
        <SubNavigationItem to="/oferta#wynajem">wynajem pracowni</SubNavigationItem>
      </DropdownWrapper>
      {isExpandable ? null : <MobileNavItem isGreen imageUrl={arrowDownGreen} isScrollDown text="przewiń dalej" />}
    </Wrapper>
  )
}

export default MobileNavMenu