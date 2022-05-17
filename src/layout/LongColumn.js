import React from "react"
import { ColumnWrapper } from "./LongColumn.styles"

const LongColumn = ({ children}) => {
  return (
    <ColumnWrapper>
      {children}
    </ColumnWrapper>
  )
}

export default LongColumn