import React from "react"
import { Wrapper, NavigationWrapper, NavigationItem } from "./NavigationBar.styles"

const NavigationBar = ({ isGreen }) => {
  return (
    <Wrapper isGreen={isGreen}>
      <NavigationWrapper>
        <NavigationItem isGreen={isGreen} href="/">oferta</NavigationItem>
        <NavigationItem isGreen={isGreen} href="/">florystyka ślubna</NavigationItem>
        <NavigationItem isGreen={isGreen} href="/">poznaj nas</NavigationItem>
        <NavigationItem isGreen={isGreen} href="/">kontakt</NavigationItem>
      </NavigationWrapper>
    </Wrapper>
  )
}

export default NavigationBar