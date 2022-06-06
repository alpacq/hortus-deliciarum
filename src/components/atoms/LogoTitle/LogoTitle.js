import React from "react"
import { Logo, Wrapper } from "./LogoTitle.styles"

const LogoTitle = ({ isMobile, logoUrl, id }) => {
  return (
    <Wrapper to="/" id={id} isMobile={isMobile}>
      <Logo src={logoUrl} alt="" />
    </Wrapper>
  )
}

export default LogoTitle