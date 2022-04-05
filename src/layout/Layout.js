import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, Wrapper } from "./Layout.styles"
import { theme } from "../utils/theme"

const Layout = ({ isGreen, screensHeight, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Wrapper isGreen={isGreen} screensHeight={screensHeight}>
          {children}
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout