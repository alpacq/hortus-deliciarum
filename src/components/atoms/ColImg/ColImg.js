import React from "react"
import { Wrapper, StyledImg } from "./ColImg.styles"

const ColImg = ({ imageUrl, imageAlt }) => {
  return (
    <Wrapper >
      <StyledImg src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default ColImg