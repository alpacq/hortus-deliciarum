import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  margin-left: ${({ isBig, isCentered }) => ((isBig && !isCentered) ? "8vw" : "0")};
  text-decoration: none;
  text-transform: uppercase;
  width: 85vw;
  height: 7vh;
  font-size: clamp(1.8rem, 0.0043rem + 1.5603vw, 3rem);
  font-weight: 500;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  box-shadow: 0px 4px 10px ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  align-self: ${({ isRight, isCentered }) => (isRight ? "flex-end" : isCentered ? "center" : "flex-start")};
  cursor: pointer;
  margin-top: ${({ isCentered }) => (isCentered ? "1.33em" : "0.67em")};
  margin-bottom: 1.33em;

  &:hover {
    background: ${({ theme }) => theme.colors.clickedBtn};
  }

  &:active {
    background: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.sentBtn)};
    color: ${({ theme }) => theme.colors.textGreen};
    box-shadow: 0px 4px 4px ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.sentBtnShadow)};
  }

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
    text-transform: none;
    width: ${({ isBig }) => (isBig ? "21vw" : "14vw")};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.bgTextSand};
    background: ${({ theme }) => theme.colors.buttonGreen};
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.textGreen};
    margin-bottom: ${({ isCentered }) => (isCentered ? "1.33em" : "0")};
  }
`