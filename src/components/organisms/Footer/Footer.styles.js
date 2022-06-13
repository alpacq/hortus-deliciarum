import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  display: none;
  width: 100%;
  height: clamp(2.4rem, 2.0308rem + 1.0256vw, 4rem);
  background: ${({ theme, isGreen }) => (isGreen ? theme.colors.footerGreen : theme.colors.darkSand)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  margin: 0;
  z-index: 100;
  padding-left: clamp(2.4rem, 2.0308rem + 1.0256vw, 4rem);
  padding-right: 10px;
  box-shadow: 4px 0px 10px ${({ theme, isGreen }) => (isGreen ? theme.colors.textGreen : theme.colors.footerShadow)};
  
  ${({ theme }) => theme.media.desktop} {
    display: flex;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  cursor: pointer;
  z-index: 101;
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  opacity: ${({ isGreen }) => (isGreen ? "1" : "0.4")};
`