import React from "react"
import { SectionWrapper, LongSectionWrapper } from "./Section.styles"

const Section = ({ id, children, isLong, isMultiCarousel, isMobile }) => {
  return (
    <>
      {isLong ? 
      <LongSectionWrapper>
        {children}
      </LongSectionWrapper> :
      <SectionWrapper isMobile={isMobile} id={id} isMultiCarousel={isMultiCarousel}>
      {children}
    </SectionWrapper>}
    </>
  )
}

export default Section