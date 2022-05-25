import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background: ${({ theme, isGreen }) => (isGreen ? theme.colors.footerGreen : theme.colors.darkSand)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  margin: 0;
  z-index: 2;
  padding-left: 40px;
  padding-right: 10px;
  box-shadow: 4px 0px 10px ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.footerShadow)};
`

export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  cursor: pointer;
  z-index: 9;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  opacity: ${({ isGreen }) => (isGreen ? "1" : "0.4")};
`