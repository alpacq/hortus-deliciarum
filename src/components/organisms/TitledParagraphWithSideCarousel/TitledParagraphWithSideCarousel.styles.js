import styled from "styled-components"
import greenBackground from '../../../images/Rectangle.svg'
import sandBackground from '../../../images/RectangleSand.svg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content:  center;
  align-items: center;
`

export const TextWrapper = styled.div`
  flex: 50%;
  height: 100%;
  padding-right: 6vw;
  padding-left: 2vw;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : `url(${sandBackground})`)};
  background-blend-mode: ${({ isGreen }) => (isGreen ? 'normal' : 'soft-light')};
  background-repeat: repeat;
  z-index: 99 !important;
`

export const SliderWrapper = styled.div`
  flex: 50%;
  width: 40vw;
  padding-left: 3vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`