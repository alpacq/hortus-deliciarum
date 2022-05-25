import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ isBig, isCentered }) => ((isBig && !isCentered) ? "8vw" : "0")};
  text-decoration: none;
  text-transform: uppercase;
  width: 85vw;
  height: 7vh;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.bgTextSand};
  background: ${({ theme }) => theme.colors.buttonGreen};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.textGreen};
  border-radius: 10px;
  align-self: ${({ isRight, isCentered }) => (isRight ? "flex-end" : isCentered ? "center" : "flex-start")};
  cursor: pointer;
  margin-top: ${({ isCentered }) => (isCentered ? "1.33em" : "0.67em")};
  margin-bottom: ${({ isCentered }) => (isCentered ? "1.33em" : "0")};

  &:hover {
    background: ${({ theme }) => theme.colors.clickedBtn};
  }

  &:active {
    background: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.sentBtn)};
    color: ${({ theme }) => theme.colors.textGreen};
    box-shadow: 0px 4px 4px ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.sentBtnShadow)};
  }

  ${({ theme }) => theme.media.desktop} {
    text-transform: none;
    width: ${({ isBig }) => (isBig ? "21vw" : "14vw")};
  }
`