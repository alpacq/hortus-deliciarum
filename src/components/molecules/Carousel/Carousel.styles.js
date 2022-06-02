import styled from "styled-components"
import greenBackground from '../../../images/Rectangle.svg'
import sandBackground from '../../../images/RectangleSand.svg'

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-height: 85vw;

  ${({ theme }) => theme.media.desktop} {
    width: ${({ isFullscreen }) => (isFullscreen ? "84.5vw" : "100%")};
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
    max-height: none;
  }
`

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 1s ease-out;

  ${({ theme }) => theme.media.desktop} {
    max-width: 73vw;
    max-height: 96vh;
  }
`

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemWrapper = styled.div`
  width: ${({ moveBy }) => `calc(${moveBy} * 1vw)`};
  max-height: 85vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop} {
    height: 100%;
    max-height: none;
  }
`

export const LeftOverlayWrapper = styled.div`
  height: 100%;
  position: absolute;
  left: -14vw;
  width: 21.5vw;
  z-index: 99 !important;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : `url(${sandBackground})`)};
  background-blend-mode: ${({ isGreen }) => (isGreen ? 'normal' : 'soft-light')};
  background-repeat: repeat;

  ${({ theme }) => theme.media.desktop} {
    left: -14vw;
    width: 20vw;
  }
`

export const RightOverlayWrapper = styled.div`
  height: 100%;
  position: absolute;
  right: -8vw;
  width: 15.5vw;
  z-index: 99 !important;
  border: none;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : `url(${sandBackground})`)};
  background-blend-mode: ${({ isGreen }) => (isGreen ? 'normal' : 'soft-light')};
  background-repeat: repeat;

  ${({ theme }) => theme.media.desktop} {
    right: -8vw;
    width: 14vw;
  }
`

export const StyledImg = styled.img`
  object-fit: cover;
  object-position: center;
  max-height: 85vw;

  ${({ theme }) => theme.media.desktop} {
    object-fit: initial;
    object-position: initial;
    max-height: none;
  }
`