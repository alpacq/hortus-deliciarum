import React from "react"
import TitledParagraph from "../../molecules/TitledParagraph/TitledParagraph"
import PageImg from "../../atoms/PageImg/PageImg"
import { Wrapper } from "./TitledParagraphWithImage.styles"
import OrnamentImg from "../../atoms/OrnamentImg/OrnamentImg"
import mobileOrnament from "../../../images/mobileOrnament.svg"

const TitledParagraphWithImage = ({ isReversed, isFinal, title, text, isGreen, hasButton, hasMobileButton, isButtonBig, buttonText="", mobileButtonText="", linkUrl="/", isButtonRight, imageUrl, imageAlt }) => {
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
          hasMobileButton={hasMobileButton}
          isButtonBig={isButtonBig}
          buttonText={buttonText}
          mobileButtonText={mobileButtonText}
          linkUrl={linkUrl}
          isButtonRight={isButtonRight} 
          imageUrl={imageUrl}
          imageAlt={imageAlt} />
          {isFinal ? null : <OrnamentImg imageUrl={mobileOrnament} imageAlt="" isMobile />}
      </Wrapper> :
      <Wrapper isFinal={isFinal}>
        <TitledParagraph
          isFinal={isFinal}
          title={title}
          text={text}
          isGreen={isGreen}
          hasButton={hasButton}
          hasMobileButton={hasMobileButton}
          isButtonBig={isButtonBig}
          buttonText={buttonText}
          mobileButtonText={mobileButtonText}
          linkUrl={linkUrl}
          isButtonRight={isButtonRight}
          imageUrl={imageUrl}
          imageAlt={imageAlt} />
        <PageImg imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
        {isFinal ? null : <OrnamentImg imageUrl={mobileOrnament} imageAlt="" isMobile />}
      </Wrapper>}    
    </>
  )
}

export default TitledParagraphWithImage