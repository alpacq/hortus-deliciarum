import React from "react"
import TitledParagraph from "../../molecules/TitledParagraph/TitledParagraph"
import PageImg from "../../atoms/PageImg/PageImg"
import { Wrapper } from "./TitledParagraphWithImage.styles"

const TitledParagraphWithImage = ({ isReversed, isFinal, title, text, isGreen, hasButton, buttonText="", linkUrl="/", imageUrl, imageAlt }) => {
  return (
    <>
      {isReversed ? 
      <Wrapper isFinal={isFinal}>
        <PageImg imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
        <TitledParagraph
          title={title}
          text={text}
          isGreen={isGreen}
          hasButton={hasButton}
          buttonText={buttonText}
          linkUrl={linkUrl} />
      </Wrapper> :
      <Wrapper isFinal={isFinal}>
        <TitledParagraph
          title={title}
          text={text}
          isGreen={isGreen}
          hasButton={hasButton}
          buttonText={buttonText}
          linkUrl={linkUrl} />
        <PageImg imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
      </Wrapper>}    
    </>
  )
}

export default TitledParagraphWithImage