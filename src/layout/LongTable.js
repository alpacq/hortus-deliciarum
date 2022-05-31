import React from "react"
import { LongColumnsWrapper } from "./LongTable.styles"

const LongTable = ({ children, isMobile }) => {
  return (
    <LongColumnsWrapper isMobile={isMobile}>
      {children}
    </LongColumnsWrapper>
  )
}

export default LongTable