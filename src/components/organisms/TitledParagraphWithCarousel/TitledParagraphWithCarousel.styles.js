import styled from "styled-components"
import Slider from "react-slick" 

export const Wrapper = styled.div`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AnotherWrapper = styled.div`
  width: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;
`

export const ImgWrapper = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-self: center;
`

export const StyledImg = styled.img`
  width: 100%;
  margin: 2vh 2vw 2vh 6vw;
`

export const CarouselWrapper = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
  position: relative;
`

export const StyledCarousel = styled(Slider)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -3vw;
  
  .slick-arrow {
    top: 35%;
  }

  .slick-arrow::before {
    display: none !important;
  }  
`