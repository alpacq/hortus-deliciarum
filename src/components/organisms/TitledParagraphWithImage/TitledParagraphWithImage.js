import React from "react"
import TitledParagraph from "../../molecules/TitledParagraph/TitledParagraph"
import PageImg from "../../atoms/PageImg/PageImg"
import { Wrapper } from "./TitledParagraphWithImage.styles"

const TitledParagraphWithImage = ({ isReversed, isFinal, title, text, isGreen, hasButton, buttonText="", linkUrl="/", isButtonRight, imageUrl, imageAlt }) => {
  return (
    <>
      {isReversed ? 
      <Wrapper isFinal={isFinal} isReversed={isReversed} >
        <PageImg imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
        <TitledParagraph
          isFinal={isFinal}
          title={title}
          text={text}
          isGreen={isGreen}
          hasButton={hasButton}
          buttonText={buttonText}
          linkUrl={linkUrl}
          isButtonRight={isButtonRight} />
      </Wrapper> :
      <Wrapper isFinal={isFinal}>
        <TitledParagraph
          isFinal={isFinal}
          title={title}
          text={text}
          isGreen={isGreen}
          hasButton={hasButton}
          buttonText={buttonText}
          linkUrl={linkUrl}
          isButtonRight={isButtonRight} />
        <PageImg imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
      </Wrapper>}    
    </>
  )
}

export default TitledParagraphWithImage