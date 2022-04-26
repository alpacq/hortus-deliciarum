import React from "react"
import { SectionWrapper, LongSectionWrapper } from "./Section.styles"

const Section = ({ id, children, isLong , isFinal }) => {
  return (
    <>
      {isLong ? 
      <LongSectionWrapper>
        {children}
      </LongSectionWrapper>  :
      <SectionWrapper id={id} isFinal={isFinal} >
        {children}
      </SectionWrapper>}
    </>
  )
}

export default Section