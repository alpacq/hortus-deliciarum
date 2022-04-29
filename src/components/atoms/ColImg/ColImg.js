import React from "react"
import { StyledImage } from "../PageImg/PageImg.styles"
import { AbsoluteImg, Wrapper } from "./ColImg.styles"

const ColImg = ({ imageUrl, imageAlt, isSmall, isAbsolute, absHeight=0 }) => {
  return (
    <>
      {isAbsolute ? 
      <Wrapper isSmall={isSmall} isAbsolute absHeight={absHeight}>
        <AbsoluteImg src={imageUrl} alt={imageAlt} />
      </Wrapper> :
      <Wrapper isSmall={isSmall} >
        <StyledImage src={imageUrl} alt={imageAlt} />
      </Wrapper>}
    </>
  )
}

export default ColImg