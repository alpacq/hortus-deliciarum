import React from "react"
import { Wrapper, CircleImage } from "./LandingCircle.styles"
import circle from "../../../images/image 1.svg"

const LandingCircle = () => {
  return (
    <Wrapper>
      <CircleImage src={circle} alt="" />
    </Wrapper>
  )
}

export default LandingCircle