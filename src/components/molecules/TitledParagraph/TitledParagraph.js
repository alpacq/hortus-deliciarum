import React from "react"
import { Button } from "../../atoms/Button/Button"
import { Paragraph } from "../../atoms/Paragraph/Paragraph"
import { Title } from "../../atoms/Title/Title"
import BigSocialsBar from "../BigSocialsBar/BigSocialsBar"
import { TelephoneParagraph, Wrapper } from "./TitledParagraph.styles"
import PageImg from "../../atoms/PageImg/PageImg"

const TitledParagraph = ({ isMobile, isCarousel, isFinal, isCutted, title, text, isGreen, hasButton, hasMobileButton, isMobileButtonUp, isButtonBig, buttonText="", mobileButtonText="", linkUrl="/", isButtonRight, imageUrl="", imageAlt="" }) => {
  const richText = {
    __html: text
  }
  return (
    <Wrapper isMobile={isMobile} isCarousel={isCarousel} isFinal={isFinal}>
      <Title isCentered={isCarousel} isGreen={isGreen} isFinal={isFinal}>{title}</Title>
      <Paragraph isCarousel={isCarousel} isGreen={isGreen} dangerouslySetInnerHTML={richText} />
      {(isCutted ? <TelephoneParagraph>tel. +48 519 059 013</TelephoneParagraph> : null)}
      {(isFinal ? <BigSocialsBar isGreen={isGreen} /> : null)}
      {((hasMobileButton && isMobileButtonUp) ? <Button isMobile isGreen={isGreen} to={linkUrl}>{mobileButtonText}</Button> : null)}
      <PageImg isMobile imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
      {(hasButton ? <Button isBig={isButtonBig} isRight={isButtonRight} isGreen={isGreen} to={linkUrl}>{buttonText}</Button> : null)}
      {((hasMobileButton && !isMobileButtonUp) ? <Button isMobile isGreen={isGreen} to={linkUrl}>{mobileButtonText}</Button> : null)}      
    </Wrapper>
  )
}

export default TitledParagraph