import React from "react"
import { Wrapper, StyledImg } from "./OrnamentImg.styles"

const OrnamentImg = ({ imageUrl, imageAlt }) => {
  return (
    <Wrapper>
      <StyledImg src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default OrnamentImg