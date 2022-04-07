import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitledParagraph from "../../molecules/TitledParagraph/TitledParagraph"
import { AnotherWrapper, CarouselWrapper, ImgWrapper, StyledCarousel, StyledImg, Wrapper } from "./TitledParagraphWithCarousel.styles"
import PrevArrow from "../../atoms/CarouselArrows/PrevArrow";
import NextArrow from "../../atoms/CarouselArrows/NextArrow";

const TitledParagraphWithCarousel = ({ title, text, isGreen, imageUrls }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <Wrapper>
      <TitledParagraph
          isCarousel
          title={title}
          text={text}
          isGreen={isGreen} />
      <CarouselWrapper>
        <StyledCarousel {...settings}>
          {imageUrls.map((imageUrl, index) => (
            <AnotherWrapper>
              <ImgWrapper key={index}>
                <StyledImg src={imageUrl} alt="" />
              </ImgWrapper>
            </AnotherWrapper>
          ))}
        </StyledCarousel>
      </CarouselWrapper>
    </Wrapper>
  )
}

export default TitledParagraphWithCarousel