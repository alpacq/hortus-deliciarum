import React from "react"
import { Title } from "../../atoms/Title/Title"
import { Wrapper } from "./CenteredTitle.styles"

const CenteredTitle = ({ title, isGreen, isLong, isMobile }) => {
  return (
    <Wrapper isMobile={isMobile}>
      <Title isCentered isGreen={isGreen} isLong={isLong}>{title}</Title>
    </Wrapper>
  )
}

export default CenteredTitle