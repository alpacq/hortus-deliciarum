import React from "react"
import { Wrapper, StyledImg } from "./OrnamentImg.styles"

const OrnamentImg = ({ imageUrl, imageAlt, isMobile }) => {
  return (
    <Wrapper isMobile={isMobile}>
      <StyledImg src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default OrnamentImg