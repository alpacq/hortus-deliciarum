import React from "react"
import { Wrapper, NavigationWrapper, NavigationItemWrapper, NavigationItem, DropdownWrapper, SubNavigationItem } from "./NavigationBar.styles"

const NavigationBar = ({ isGreen }) => {
  return (
    <Wrapper isGreen={isGreen}>
      <NavigationWrapper>
        <NavigationItemWrapper>
          <NavigationItem isGreen={isGreen} to="/oferta" activeClassName="active">oferta</NavigationItem>
          <DropdownWrapper isGreen={isGreen}>
            <SubNavigationItem isGreen={isGreen} to="/oferta#ciete">kwiaty cięte</SubNavigationItem>
            <SubNavigationItem isGreen={isGreen} to="/oferta#doniczkowe">rośliny doniczkowe</SubNavigationItem>
            <SubNavigationItem isGreen={isGreen} to="/oferta#dodatki">dodatki</SubNavigationItem>
            <SubNavigationItem isGreen={isGreen} to="/oferta#aranzacja">aranżacja przestrzeni</SubNavigationItem>
            <SubNavigationItem isGreen={isGreen} to="/oferta#wynajem">wynajem pracowni</SubNavigationItem>
          </DropdownWrapper>
        </NavigationItemWrapper>
        <NavigationItemWrapper>
          <NavigationItem isGreen={isGreen} to="/florystykaslubna" activeClassName="active">florystyka ślubna</NavigationItem>
        </NavigationItemWrapper>
        <NavigationItemWrapper>
          <NavigationItem isGreen={isGreen} to="/poznajnas" activeClassName="active">poznaj nas</NavigationItem>
        </NavigationItemWrapper>
        <NavigationItemWrapper>
          <NavigationItem isGreen={isGreen} to="/kontakt" activeClassName="active">kontakt</NavigationItem>
        </NavigationItemWrapper>
      </NavigationWrapper>
    </Wrapper>
  )
}

export default NavigationBar