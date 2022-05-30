import React from "react"
import { StyledImage, Wrapper } from "./PageImg.styles"

const PageImg = ({ imageUrl, imageAlt="", isFinal, isMobile }) => {
  return (
    <Wrapper isFinal={isFinal} isMobile={isMobile}>
      <StyledImage isFinal={isFinal} src={imageUrl} alt={imageAlt} />
    </Wrapper>
  )
}

export default PageImg