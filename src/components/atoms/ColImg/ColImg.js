import React from "react"
import { StyledImage } from "../PageImg/PageImg.styles"
import { Wrapper } from "./ColImg.styles"

const ColImg = ({ imageUrl, imageAlt, isSmall }) => {
  return (
    <Wrapper isSmall={isSmall}>
      <StyledImage src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default ColImg