import React from "react"
import { Wrapper, StyledLink } from "./Footer.styles"
import SmallSocialsBar from "../../molecules/SmallSocialsBar/SmallSocialsBar"
import { useFooterText } from "../../../providers/FooterLinkTextProvider"


const Footer = ({ isGreen }) => {
  const footerText = useFooterText()

  return (
    <Wrapper isGreen={isGreen}>
      <StyledLink isGreen={isGreen} to="/#mainpage">{footerText.linkText}</StyledLink>
      <SmallSocialsBar isGreen={isGreen} />
    </Wrapper>
  )
}

export default Footer