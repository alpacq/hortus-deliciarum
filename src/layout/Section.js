import React from "react"
import { SectionWrapper } from "./Section.styles"

const Section = ({ id, children }) => {
  return (
    <SectionWrapper id={id}>
      {children}
    </SectionWrapper>
  )
}

export default Section