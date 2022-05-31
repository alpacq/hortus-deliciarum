import React from "react"
import { Wrapper, StyledImg } from "./ColImg.styles"

const ColImg = ({ hasMargin, isMobile, isDesktop, imageUrl, imageAlt }) => {
  return (
    <Wrapper hasMargin={hasMargin} isMobile={isMobile} isDesktop={isDesktop}>
      <StyledImg src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default ColImg