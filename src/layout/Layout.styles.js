import styled, { createGlobalStyle } from "styled-components"
import greenBackground from '../images/Rectangle.svg'

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
  background-color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background-image: ${({ isGreen }) => (isGreen ? `url(${greenBackground})` : 'none')};
  background-repeat: ${({ isGreen }) => (isGreen ? 'repeat' : 'no-repeat')};
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  position: relative;
`