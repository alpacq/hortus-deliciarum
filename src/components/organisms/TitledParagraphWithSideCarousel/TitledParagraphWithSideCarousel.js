import React from "react"
import TitledParagraph from "../../molecules/TitledParagraph/TitledParagraph"
import Carousel from "../../molecules/Carousel/Carousel"
import { Wrapper, SliderWrapper, TextWrapper } from "./TitledParagraphWithSideCarousel.styles"

const TitledParagraphWithSideCarousel = ({ isMobile, isReversed, title, text, isGreen, hasButton, buttonText="", linkUrl="/", isButtonRight, imageUrls, imageAlts }) => {
  return (
    <>
      {isReversed ? 
      <Wrapper isReversed={isReversed} isMobile={isMobile}>
        <SliderWrapper>
          <Carousel imageUrls={imageUrls} imageAlts={imageAlts} moveBy={40} numSlides={3} visibleSlides={1} />
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
      <Wrapper isMobile={isMobile}>
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
          <Carousel imageUrls={imageUrls} imageAlts={imageAlts} moveBy={40} numSlides={7} visibleSlides={1} />
        </SliderWrapper>
      </Wrapper>}    
    </>
  )
}

export default TitledParagraphWithSideCarousel