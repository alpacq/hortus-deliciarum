import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, ScrollWrapper, Wrapper } from "./Layout.styles"
import { theme } from "../utils/theme"
import logo from "../images/favicon.svg"
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar"
import Footer from "../components/organisms/Footer/Footer"
import { FooterLinkTextProvider } from "../providers/FooterLinkTextProvider"

const Layout = ({ title, metaTag, isScrollSnap, isGreen, screensHeight, children }) => {
  const keywords = 'kwiaciarnia warszawa, kwiaty warszawa, kwiaty doniczkowe warszawa, rośliny doniczkowe warszawa, suszone kwiaty warszawa, flower box warszawa, florystyka warszawa, bukiet 100 róż warszawa, bukiet ślubny warszawa cena, rośliny w szkle warszawa, wianek ślubny warszawa, florystka na wesele warszawa, pracownia florystyczna warszawa, świece sojowe warszawa, kwiaciarnia bielany warszawa, kwiaciarnia warszawa centrum'

  return (
    <ThemeProvider theme={theme}>
      <FooterLinkTextProvider>
        <GlobalStyle />
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={metaTag} />
          <meta name="keywords" content={keywords} />
          <link rel="icon" type="image/png" href={logo} sizes="32x32" />
        </Helmet>
        {(isScrollSnap ? 
        <ScrollWrapper isGreen={isGreen} screensHeight={screensHeight}>
          <NavigationBar isGreen={isGreen} />
          {children}
          <Footer isGreen={isGreen} />
        </ScrollWrapper> :
        <Wrapper isGreen={isGreen} screensHeight={screensHeight}>
          <NavigationBar isGreen={isGreen} />
          {children}
          <Footer isGreen={isGreen} />
        </Wrapper>)}
      </FooterLinkTextProvider>
    </ThemeProvider>
  )
}

export default Layout