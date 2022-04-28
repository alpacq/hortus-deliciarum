import React, { useState, useEffect } from "react"
import { Wrapper, ContainerWrapper, ItemWrapper, StyledImg, CarouselWrapper, LeftOverlayWrapper, RightOverlayWrapper } from "./Carousel.styles"
import PrevArrow from "../../atoms/CarouselArrows/PrevArrow";
import NextArrow from "../../atoms/CarouselArrows/NextArrow";

const Carousel = ({ imageUrls, moveBy, isGreen, numSlides, visibleSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [translate, setTranslate] = useState(0)

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide)
      : setCurrentSlide(currentSlide < (numSlides - visibleSlides) ? currentSlide + 1 : currentSlide)
  }

  useEffect(() => {
    setTranslate(-((currentSlide * moveBy) + (moveBy * (visibleSlides / 2))))
  }, [currentSlide, moveBy, visibleSlides])

  return (
    <Wrapper>
      <CarouselWrapper style={{ transform: `translateX(calc(${translate}vw + 50%))`}}>
        {imageUrls.map((imageUrl, index) => (
          <ContainerWrapper key={index}>
            <ItemWrapper moveBy={moveBy}>
              <StyledImg src={imageUrl} alt="" />
            </ItemWrapper>
          </ContainerWrapper>
        ))}
      </CarouselWrapper>
      <LeftOverlayWrapper isGreen={isGreen}/>
      <RightOverlayWrapper isGreen={isGreen}/>
      <PrevArrow onClick={() => handleClick("left")}/>
      <NextArrow onClick={() => handleClick("")} />
    </Wrapper>
  )
}

export default Carousel