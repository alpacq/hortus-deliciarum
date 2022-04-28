import React from "react"
import { ColumnWrapper } from "./LongColumn.styles"

const LongColumn = ({ children, isSmall }) => {
  return (
    <ColumnWrapper isSmall={isSmall}>
      {children}
    </ColumnWrapper>
  )
}

export default LongColumn