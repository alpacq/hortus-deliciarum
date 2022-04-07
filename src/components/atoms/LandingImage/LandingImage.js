import React from "react"
import { Wrapper, StyledImage } from "./LandingImage.styles"


const LandingImage = ({ imageUrl, isTop }) => {
  return (
    <Wrapper isTop={isTop}>
      <StyledImage src={imageUrl} alt="" />
    </Wrapper>
  )
}

export default LandingImage