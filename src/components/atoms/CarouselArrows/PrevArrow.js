import React from "react"
import arrow from "../../../images/Polygon 5.svg"
import arrowDesktop from "../../../images/Polygon 5 (2).svg"
import { PrevButton, MobileImg, DesktopImg } from "./CarouselArrows.styles";

const PrevArrow = ({ className, onClick }) => (
  <PrevButton onClick={onClick} className={className}>
    <MobileImg src={arrow} alt="" />
    <DesktopImg src={arrowDesktop} alt="" />
  </PrevButton>
);

export default PrevArrow;