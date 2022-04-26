import React from "react"
import { Wrapper, StyledLogo } from "./BigSocialsBar.styles"
import greenIg from "../../../images/instagram 3.svg"
import greenFb from "../../../images/facebook 4.svg"
import sandIg from "../../../images/instagram2.svg"
import sandFb from "../../../images/facebook3.svg"

const BigSocialsBar = ({ isGreen }) => {
  return (
    <>
      {isGreen ? 
      <Wrapper>
        <a href="https://www.facebook.com/hortusdeliciarumkwiaty" target="_blank" rel="noopener noreferrer">
          <StyledLogo src={greenFb} alt="" />
        </a>
        <a href="https://www.instagram.com/hortusdeliciarum/" target="_blank" rel="noopener noreferrer">
          <StyledLogo src={greenIg} alt="" />
        </a>
      </Wrapper> :
      <Wrapper>
        <a href="https://www.facebook.com/hortusdeliciarumkwiaty" target="_blank" rel="noopener noreferrer">
          <StyledLogo src={sandFb} alt="" />
        </a>
        <a href="https://www.instagram.com/hortusdeliciarum/" target="_blank" rel="noopener noreferrer">
          <StyledLogo src={sandIg} alt="" />
        </a>
      </Wrapper>}
    </>
  )
}

export default BigSocialsBar