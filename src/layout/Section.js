import React from "react"
import { SectionWrapper, LongSectionWrapper } from "./Section.styles"

const Section = ({ id, children, isLong , isFinal, isMulti, longSectionHeight=0 }) => {
  return (
    <>
      {isLong ? 
      <LongSectionWrapper isMulti={isMulti} longSectionHeight={longSectionHeight}>
        {children}
      </LongSectionWrapper> :
      <SectionWrapper id={id} isFinal={isFinal} isMulti={isMulti} longSectionHeight={longSectionHeight}>
      {children}
    </SectionWrapper>}
    </>
  )
}

export default Section