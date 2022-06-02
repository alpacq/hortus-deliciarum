import React from "react"
import { Wrapper } from "./CarouselWithButton.styles"
import Carousel from "../../molecules/Carousel/Carousel"

const CarouselWithButton = ({ imageUrls, moveBy, isGreen, numSlides, visibleSlides }) => {
  return (
    <Wrapper>
      <Carousel isFullscreen imageUrls={imageUrls} moveBy={moveBy} isGreen={isGreen} numSlides={numSlides} visibleSlides={visibleSlides} />
    </Wrapper>
  )
}

export default CarouselWithButton