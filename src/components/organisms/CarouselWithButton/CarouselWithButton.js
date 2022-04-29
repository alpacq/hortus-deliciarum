import React from "react"
import { Wrapper } from "./CarouselWithButton.styles"
import Carousel from "../../molecules/Carousel/Carousel"
import { Button } from "../../atoms/Button/Button"

const CarouselWithButton = ({ imageUrls, moveBy, isGreen, numSlides, visibleSlides, buttonText, linkUrl }) => {
  return (
    <Wrapper>
      <Carousel imageUrls={imageUrls} moveBy={moveBy} isGreen={isGreen} numSlides={numSlides} visibleSlides={visibleSlides} />
      <Button isBig isCentered to={linkUrl}>{buttonText}</Button>
    </Wrapper>
  )
}

export default CarouselWithButton