import React from "react"
import { Wrapper, StyledImg } from "./OrnamentImg.styles"

const OrnamentImg = ({ imageUrl, imageAlt, isMobile, hasMargin, isDesktop }) => {
  return (
    <Wrapper isMobile={isMobile} isDesktop={isDesktop} hasMargin={hasMargin}>
      <StyledImg src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default OrnamentImg