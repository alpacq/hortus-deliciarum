import React from "react"
import { LongColumnsWrapper } from "./LongTable.styles"

const LongTable = ({ children }) => {
  return (
    <LongColumnsWrapper>
      {children}
    </LongColumnsWrapper>
  )
}

export default LongTable