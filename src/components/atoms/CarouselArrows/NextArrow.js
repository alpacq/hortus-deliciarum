import React from "react"
import arrow from "../../../images/Polygon 6.svg"
import arrowDesktop from "../../../images/Polygon 6 (2).svg"
import { NextButton, MobileImg, DesktopImg } from "./CarouselArrows.styles";

const NextArrow = ({ className, onClick }) => (
  <NextButton onClick={onClick} className={className}>
    <MobileImg src={arrow} alt="" />
    <DesktopImg src={arrowDesktop} alt="" />
  </NextButton>
);

export default NextArrow;