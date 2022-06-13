import React from "react"
import Carousel from "../../molecules/Carousel/Carousel"
import TitledParagraph from "../../molecules/TitledParagraph/TitledParagraph"
import { SliderWrapper, TextWrapper, Wrapper } from "./TitledParagraphWithCarousel.styles"

const TitledParagraphWithCarousel = ({ isMobile, title, text, isGreen, imageUrls }) => {

  return (
    <Wrapper isMobile={isMobile}>
      <TextWrapper>
        <TitledParagraph
          isCarousel
          title={title}
          text={text}
          isGreen={isGreen} />
      </TextWrapper>
      <SliderWrapper>
        <Carousel imageUrls={imageUrls} moveBy={30} numSlides={13} visibleSlides={3}/>
      </SliderWrapper>
    </Wrapper>
  )
}

export default TitledParagraphWithCarousel