import React from "react"
import { Wrapper, StyledImage } from "./LandingImage.styles"


const LandingImage = ({ imageUrl, imageAlt, isTop, isMobile }) => {
  return (
    <Wrapper isTop={isTop} isMobile={isMobile}>
      <StyledImage src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default LandingImage