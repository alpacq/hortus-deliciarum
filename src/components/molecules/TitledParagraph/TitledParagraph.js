import React from "react"
import { Button } from "../../atoms/Button/Button"
import { Paragraph } from "../../atoms/Paragraph/Paragraph"
import { Title } from "../../atoms/Title/Title"
import BigSocialsBar from "../BigSocialsBar/BigSocialsBar"
import { Wrapper } from "./TitledParagraph.styles"
import PageImg from "../../atoms/PageImg/PageImg"

const TitledParagraph = ({ isCarousel, isFinal, title, text, isGreen, hasButton, hasMobileButton, isButtonBig, buttonText="", mobileButtonText="", linkUrl="/", isButtonRight, imageUrl="", imageAlt="" }) => {
  const richText = {
    __html: text
  }
  return (
    <Wrapper isCarousel={isCarousel} isFinal={isFinal}>
      <Title isGreen={isGreen} isFinal={isFinal}>{title}</Title>
      <Paragraph isCarousel={isCarousel} isGreen={isGreen} dangerouslySetInnerHTML={richText} />
      {(isFinal ? <BigSocialsBar isGreen={isGreen} /> : null)}
      <PageImg isMobile imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
      {(hasButton ? <Button isBig={isButtonBig} isRight={isButtonRight} isGreen={isGreen} to={linkUrl}>{buttonText}</Button> : null)}
      {(hasMobileButton ? <Button isMobile isGreen={isGreen} to={linkUrl}>{mobileButtonText}</Button> : null)}      
    </Wrapper>
  )
}

export default TitledParagraph