import React from "react"
import { Wrapper, StyledImage } from "./LandingImage.styles"


const LandingImage = ({ imageUrl, isTop, isMobile }) => {
  return (
    <Wrapper isTop={isTop} isMobile={isMobile}>
      <StyledImage src={imageUrl} alt="" />
    </Wrapper>
  )
}

export default LandingImage