import React from "react"
import { Wrapper, FlowerImage } from "./LandingFlower.styles"
import flower from "../../../images/kwiatek1 1.svg"

const LandingFlower = () => {
  return (
    <Wrapper>
      <FlowerImage src={flower} alt="" />
    </Wrapper>
  )
}

export default LandingFlower