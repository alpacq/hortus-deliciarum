import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Wrapper, StyledLink, StyledArrow } from "./MobileNavItem.styles"
import { navigate } from "gatsby";

const MobileNavItem = ({ isScrollTop, isScrollDown, text, imageUrl, isGreen }) => {
  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      scrollTo('#top')
    }
  }

  const scrollDown = () => {
    if (typeof window !== 'undefined') {
      scrollTo('#firstScroll')
    }
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Wrapper>
      <StyledArrow src={imageUrl} alt="" />
      <StyledLink isGreen={isGreen} onClick={isScrollTop ? scrollTop : isScrollDown ? scrollDown : goBack}>{text}</StyledLink>
      <StyledArrow src={imageUrl} alt="" />
    </Wrapper>
  )
}

export default MobileNavItem