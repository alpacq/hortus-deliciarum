import React from "react"
import { Button } from "../../atoms/Button/Button"
import { Paragraph } from "../../atoms/Paragraph/Paragraph"
import { Title } from "../../atoms/Title/Title"
import { Wrapper } from "./TitledParagraph.styles"

const TitledParagraph = ({ isCarousel, title, text, isGreen, hasButton, buttonText="", linkUrl="/" }) => {
  const richText = {
    __html: text
  }
  return (
    <Wrapper isCarousel={isCarousel}>
      <Title isGreen={isGreen}>{title}</Title>
      <Paragraph isGreen={isGreen} dangerouslySetInnerHTML={richText} />
      {(hasButton ? <Button isRight={isGreen} to={linkUrl}>{buttonText}</Button> : null)}
    </Wrapper>
  )
}

export default TitledParagraph