import styled, { createGlobalStyle } from "styled-components"
import greenBackground from '../images/Rectangle.svg'
import sandBackground from '../images/Rectangle (2).svg'

export const GlobalStyle = createGlobalStyle`
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
  position: relative;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : `url(${sandBackground})`)};
  background-repeat: repeat;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
`

export const ScrollWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: ${({ screensHeight }) => (screensHeight === 1 ? "hidden" : "scroll")};
  scroll-snap-type: y mandatory;
  scroll-padding-top: 9vh;
  scrollbar-width: none;
  position: relative;
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : 'none')};
  background-repeat: ${({ isGreen }) => (isGreen ? 'repeat' : 'no-repeat')};
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
`