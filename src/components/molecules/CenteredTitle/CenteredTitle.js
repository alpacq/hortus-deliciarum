import React from "react"
import { Title } from "../../atoms/Title/Title"
import { Wrapper } from "./CenteredTitle.styles"

const CenteredTitle = ({ title, isGreen, isLong }) => {
  return (
    <Wrapper>
      <Title isGreen={isGreen} isLong={isLong}>{title}</Title>
    </Wrapper>
  )
}

export default CenteredTitle