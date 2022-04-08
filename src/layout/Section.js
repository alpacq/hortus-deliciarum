import React from "react"
import { SectionWrapper, LongSectionWrapper } from "./Section.styles"

const Section = ({ id, children, isLong }) => {
  return (
    <>
      {isLong ? 
      <LongSectionWrapper>
        {children}
      </LongSectionWrapper>  :
      <SectionWrapper id={id}>
        {children}
      </SectionWrapper>}
    </>
  )
}

export default Section