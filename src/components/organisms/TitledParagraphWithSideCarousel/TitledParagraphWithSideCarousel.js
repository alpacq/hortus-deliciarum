import React from "react"
import TitledParagraph from "../../molecules/TitledParagraph/TitledParagraph"
import Carousel from "../../molecules/Carousel/Carousel"
import { Wrapper, SliderWrapper, TextWrapper } from "./TitledParagraphWithSideCarousel.styles"

const TitledParagraphWithSideCarousel = ({ isReversed, title, text, isGreen, hasButton, buttonText="", linkUrl="/", isButtonRight, imageUrls }) => {
  return (
    <>
      {isReversed ? 
      <Wrapper isReversed={isReversed}>
        <SliderWrapper>
          <Carousel imageUrls={imageUrls} moveBy={40} numSlides={7} visibleSlides={1} />
        </SliderWrapper>
        <TextWrapper isGreen={isGreen}>
          <TitledParagraph
            title={title}
            text={text}
            isGreen={isGreen}
            hasButton={hasButton}
            buttonText={buttonText}
            linkUrl={linkUrl}
            isButtonRight={isButtonRight} />
        </TextWrapper>        
      </Wrapper> :
      <Wrapper>
        <TextWrapper isGreen={isGreen}>
          <TitledParagraph
            title={title}
            text={text}
            isGreen={isGreen}
            hasButton={hasButton}
            buttonText={buttonText}
            linkUrl={linkUrl}
            isButtonRight={isButtonRight} />
        </TextWrapper>
        <SliderWrapper>
          <Carousel imageUrls={imageUrls} moveBy={40} numSlides={7} visibleSlides={1} />
        </SliderWrapper>
      </Wrapper>}    
    </>
  )
}

export default TitledParagraphWithSideCarousel