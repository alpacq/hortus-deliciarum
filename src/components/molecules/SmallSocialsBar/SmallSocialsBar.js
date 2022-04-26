import React from "react"
import { Wrapper, StyledLogo } from "./SmallSocialsBar.styles"
import greenIg from "../../../images/Instagram Circle.svg"
import greenFb from "../../../images/Facebook.svg"
import greenMsg from "../../../images/Facebook Messenger.svg"
import sandIg from "../../../images/Instagram Circle (2).svg"
import sandFb from "../../../images/Facebook (2).svg"
import sandMsg from "../../../images/Facebook Messenger (2).svg"

const SmallSocialsBar = ({ isGreen }) => {
  return (
    <>
      {isGreen ? 
      <Wrapper>
        <a href="https://www.facebook.com/hortusdeliciarumkwiaty" target="_blank" rel="noopener noreferrer">
          <StyledLogo isGreen src={greenFb} alt="" />
        </a>
        <a href="https://m.me/hortusdeliciarumkwiaty" target="_blank" rel="noopener noreferrer">
          <StyledLogo isGreen src={greenMsg} alt="" />
        </a>
        <a href="https://www.instagram.com/hortusdeliciarum/" target="_blank" rel="noopener noreferrer">
          <StyledLogo isGreen src={greenIg} alt="" />
        </a>
      </Wrapper> :
      <Wrapper>
        <a href="https://www.facebook.com/hortusdeliciarumkwiaty" target="_blank" rel="noopener noreferrer">
          <StyledLogo src={sandFb} alt="" />
        </a>
        <a href="https://m.me/hortusdeliciarumkwiaty" target="_blank" rel="noopener noreferrer">
          <StyledLogo src={sandMsg} alt="" />
        </a>
        <a href="https://www.instagram.com/hortusdeliciarum/" target="_blank" rel="noopener noreferrer">
          <StyledLogo src={sandIg} alt="" />
        </a>
      </Wrapper>}
    </>
  )
}

export default SmallSocialsBar