import React from "react"
import arrow from "../../../images/Polygon 2.svg"
import { NextButton } from "./CarouselArrows.styles";

const NextArrow = ({ className, style, onClick }) => (
  <NextButton style={{...style}} onClick={onClick} className={className}>
    <img src={arrow} alt="" />
  </NextButton>
);

export default NextArrow;