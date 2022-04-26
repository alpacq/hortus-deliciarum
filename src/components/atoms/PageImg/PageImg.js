import React from "react"
import { StyledImage, Wrapper } from "./PageImg.styles"

const PageImg = ({ imageUrl, imageAlt="", isFinal }) => {
  return (
    <Wrapper isFinal={isFinal}>
      <StyledImage isFinal={isFinal} src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default PageImg