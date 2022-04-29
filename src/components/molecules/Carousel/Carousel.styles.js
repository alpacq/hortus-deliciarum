import styled from "styled-components"
import greenBackground from '../../../images/Rectangle.svg'
import sandBackground from '../../../images/Rectangle (2).svg'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-height: 80vh;
`

export const CarouselWrapper = styled.div`
  height: 88%;
  display: flex;
  flex-direction: row;
  transition: all 1s ease-out;
`

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemWrapper = styled.div`
  width: ${({ moveBy }) => `calc(${moveBy} * 1vw)`};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const LeftOverlayWrapper = styled.div`
  height: 100%;
  position: absolute;
  left: -5vw;
  width: 11vw;
  z-index: 99 !important;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : `url(${sandBackground})`)};
  background-repeat: repeat;
`

export const RightOverlayWrapper = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
  width: 6vw;
  z-index: 99 !important;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : `url(${sandBackground})`)};
  background-repeat: repeat;
`

export const StyledImg = styled.img`
`