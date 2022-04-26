import React from "react"
import { Button } from "../../atoms/Button/Button"
import { Paragraph } from "../../atoms/Paragraph/Paragraph"
import { Title } from "../../atoms/Title/Title"
import BigSocialsBar from "../BigSocialsBar/BigSocialsBar"
import { Wrapper } from "./TitledParagraph.styles"

const TitledParagraph = ({ isCarousel, isFinal, title, text, isGreen, hasButton, buttonText="", linkUrl="/", isButtonRight }) => {
  const richText = {
    __html: text
  }
  return (
    <Wrapper isCarousel={isCarousel} isFinal={isFinal}>
      <Title isGreen={isGreen}>{title}</Title>
      <Paragraph isGreen={isGreen} dangerouslySetInnerHTML={richText} />
      {(hasButton ? <Button isRight={isButtonRight} to={linkUrl}>{buttonText}</Button> : null)}
      {(isFinal ? <BigSocialsBar isGreen={isGreen} /> : null)}
    </Wrapper>
  )
}

export default TitledParagraph