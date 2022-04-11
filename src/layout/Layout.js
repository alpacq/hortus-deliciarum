import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, ScrollWrapper, Wrapper } from "./Layout.styles"
import { theme } from "../utils/theme"
import logo from "../images/favicon.svg"
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar"

const Layout = ({ title, isScrollSnap, isGreen, screensHeight, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="icon" type="image/png" href={logo} sizes="32x32" />
        </Helmet>
        {(isScrollSnap ? 
        <ScrollWrapper isGreen={isGreen}>
          <NavigationBar isGreen={isGreen} />
          {children}
        </ScrollWrapper> :
        <Wrapper isGreen={isGreen} screensHeight={screensHeight}>
          <NavigationBar isGreen={isGreen} />
          {children}
        </Wrapper>)}
      </>
    </ThemeProvider>
  )
}

export default Layout