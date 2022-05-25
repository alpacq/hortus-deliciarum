import React, { useEffect } from "react"
import { StyledSubheader, Wrapper } from "./Motto.styles"
import { useFooterText } from "../../../providers/FooterLinkTextProvider"
import { useInView } from "react-intersection-observer"

const Motto = ({ isAbsolute, isGreen, isLarge, isBold, text }) => {
  const footerText = useFooterText()
  const { ref, inView } = useInView({ threshold: 0.9})

  useEffect(() => {
    if(inView && text === "Miejsce tworzone rodzinną pasją umiłowania piękna.") {
      footerText.setFooterLinkText("przewiń dalej")
    } else {
      footerText.setFooterLinkText("strona główna")
    }
  }, [inView, footerText, text])

  return (
    <Wrapper ref={ref} isAbsolute={isAbsolute}>
      <StyledSubheader isGreen={isGreen} isLarge={isLarge} isBold={isBold}>
        {text}
      </StyledSubheader>
    </Wrapper>
  )
}

export default Motto