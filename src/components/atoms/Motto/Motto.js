import React, { useEffect } from "react"
import { StyledSubheader, Wrapper } from "./Motto.styles"
import { useFooterText } from "../../../providers/FooterLinkTextProvider"
import { useInView } from "react-intersection-observer"

const Motto = () => {
  const footerText = useFooterText()
  const { ref, inView } = useInView({ threshold: 0.9})

  useEffect(() => {
    console.log(inView)
    if(inView) {
      footerText.setFooterLinkText("przewiń dalej")
    } else {
      footerText.setFooterLinkText("strona główna")
    }
  }, [inView, footerText])

  return (
    <Wrapper ref={ref}>
      <StyledSubheader>
        Miejsce tworzone rodzinną pasją umiłowania piękna.
      </StyledSubheader>
    </Wrapper>
  )
}

export default Motto