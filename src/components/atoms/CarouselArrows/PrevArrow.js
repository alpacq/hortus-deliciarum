import React from "react"
import arrow from "../../../images/Polygon 4.svg"
import { PrevButton } from "./CarouselArrows.styles";

const PrevArrow = ({ className, style, onClick }) => (
  <PrevButton onClick={onClick} className={className}>
    <img src={arrow} alt="" />
  </PrevButton>
);

export default PrevArrow;