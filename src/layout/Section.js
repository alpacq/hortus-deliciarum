import React from "react"
import { SectionWrapper, LongSectionWrapper } from "./Section.styles"

const Section = ({ id, children, isLong, isFinal, isMobile }) => {
  return (
    <>
      {isLong ? 
      <LongSectionWrapper>
        {children}
      </LongSectionWrapper> :
      <SectionWrapper isMobile={isMobile} id={id} isFinal={isFinal}>
      {children}
    </SectionWrapper>}
    </>
  )
}

export default Section