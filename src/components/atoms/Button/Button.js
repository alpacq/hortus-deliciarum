import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ isBig, isCentered }) => ((isBig && !isCentered) ? "8vw" : "0")};
  text-decoration: none;
  width: ${({ isBig }) => (isBig ? "21vw" : "14vw")};
  height: 7vh;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.bgTextSand};
  background: ${({ theme }) => theme.colors.buttonGreen};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.textGreen};
  border-radius: 10px;
  align-self: ${({ isRight, isCentered }) => (isRight ? "flex-end" : isCentered ? "center" : "flex-start")};
  cursor: pointer;
  margin-top: ${({ isCentered }) => (isCentered ? "0" : "0.67em")};
`