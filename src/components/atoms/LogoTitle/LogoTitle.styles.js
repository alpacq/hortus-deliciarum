import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled(Link)`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  cursor: pointer;

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "initial")};
    top: 50vh;
    transform: translate(-50%, -50%);
    cursor: default;
  }
`

export const Logo = styled.img`
  height: 100%;
  width: 100%;
  min-width: 25rem;
`