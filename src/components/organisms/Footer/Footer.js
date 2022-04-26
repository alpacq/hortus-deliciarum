import React from "react"
import { Wrapper, StyledLink } from "./Footer.styles"
import SmallSocialsBar from "../../molecules/SmallSocialsBar/SmallSocialsBar"


const Footer = ({ isGreen }) => {
  return (
    <Wrapper isGreen={isGreen}>
      <StyledLink isGreen={isGreen} to="/#mainpage">strona główna</StyledLink>
      <SmallSocialsBar isGreen={isGreen} />
    </Wrapper>
  )
}

export default Footer