import React from "react"
import { Logo, Wrapper } from "./LogoTitle.styles"
import logo from "../../../images/Group 10.svg"

const LogoTitle = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="" />
    </Wrapper>
  )
}

export default LogoTitle