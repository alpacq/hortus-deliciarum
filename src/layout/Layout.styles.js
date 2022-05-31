import styled, { createGlobalStyle } from "styled-components"
import greenBackground from '../images/Rectangle.svg'
import sandBackground from '../images/RectangleSand.svg'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    overflow-x: hidden;    
  }

  a, button, input {
    font-family: 'Montserrat';
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

export const Wrapper = styled.div`
  height: ${({ screensHeight }) => `calc(${screensHeight} * 100vh)`};
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  align-items: center;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : `url(${sandBackground})`)};
  background-blend-mode: ${({ isGreen }) => (isGreen ? 'normal' : 'soft-light')};
  background-repeat: repeat;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
`

export const ScrollWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: none;
  scroll-padding-top: 0;
  scrollbar-width: none;
  position: relative;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : `url(${sandBackground})`)};
  background-blend-mode: ${({ isGreen }) => (isGreen ? 'normal' : 'soft-light')};
  background-repeat: repeat;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};

  ${({ theme }) => theme.media.desktop} {
    scroll-snap-type: y mandatory;
    scroll-padding-top: 9vh;
    overflow-y: ${({ screensHeight }) => (screensHeight === 1 ? "hidden" : "scroll")};
  }
`