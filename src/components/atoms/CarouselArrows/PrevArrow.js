import React from "react"
import arrow from "../../../images/Polygon 1.svg"
import { PrevButton } from "./CarouselArrows.styles";

const PrevArrow = ({ className, style, onClick }) => (
  <PrevButton style={{...style, left: 0}} onClick={onClick} className={className}>
    <img src={arrow} alt="" />
  </PrevButton>
);

export default PrevArrow;