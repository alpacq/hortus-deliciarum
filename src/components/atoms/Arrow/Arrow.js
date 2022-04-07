import React from "react"
import { ArrowImg, Wrapper } from "./Arrow.styles"
import arrow from "../../../images/Group 14.svg"

const Arrow = () => {
  return (
    <Wrapper>
      <ArrowImg src={arrow} alt="" />
    </Wrapper>
  )
}

export default Arrow