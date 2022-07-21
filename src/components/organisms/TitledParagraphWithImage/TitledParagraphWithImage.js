import React from "react"
import TitledParagraph from "../../molecules/TitledParagraph/TitledParagraph"
import PageImg from "../../atoms/PageImg/PageImg"
import { Wrapper } from "./TitledParagraphWithImage.styles"
import OrnamentImg from "../../atoms/OrnamentImg/OrnamentImg"
import mobileOrnament from "../../../images/mobileOrnament.svg"
import mobileOrnamentSand from "../../../images/mobileOrnamentSandBig.svg"

const TitledParagraphWithImage = ({ isMobile, isReversed, isFinal, isCutted, title, text, isGreen, hasButton, hasMobileButton, isMobileButtonUp, isButtonBig, buttonText="", mobileButtonText="", linkUrl="/", isButtonRight, imageUrl, imageAlt }) => {
  return (
    <>
      {isReversed ? 
      <Wrapper isFinal={isFinal} isReversed={isReversed} isMobile={isMobile}>
        <PageImg imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
        <TitledParagraph
          isFinal={isFinal}
          title={title}
          text={text}
          isGreen={isGreen}
          hasButton={hasButton}
          hasMobileButton={hasMobileButton}
          isMobileButtonUp={isMobileButtonUp}
          isButtonBig={isButtonBig}
          buttonText={buttonText}
          mobileButtonText={mobileButtonText}
          linkUrl={linkUrl}
          isButtonRight={isButtonRight} 
          imageUrl={imageUrl}
          imageAlt={imageAlt} />
          {isFinal ? null : <OrnamentImg hasMargin={(!hasMobileButton || isMobileButtonUp)} imageUrl={isGreen ? mobileOrnament : mobileOrnamentSand} imageAlt="" isMobile />}
      </Wrapper> :
      <Wrapper isFinal={isFinal} isMobile={isMobile}>
        <TitledParagraph
          isFinal={isFinal}
          isCutted={isCutted}
          title={title}
          text={text}
          isGreen={isGreen}
          hasButton={hasButton}
          hasMobileButton={hasMobileButton}
          isMobileButtonUp={isMobileButtonUp}
          isButtonBig={isButtonBig}
          buttonText={buttonText}
          mobileButtonText={mobileButtonText}
          linkUrl={linkUrl}
          isButtonRight={isButtonRight}
          imageUrl={imageUrl}
          imageAlt={imageAlt} />
        <PageImg imageUrl={imageUrl} imageAlt={imageAlt} isFinal={isFinal} />
        {isFinal ? null : <OrnamentImg hasMargin={(!hasMobileButton || isMobileButtonUp)} imageUrl={isGreen ? mobileOrnament : mobileOrnamentSand} imageAlt="" isMobile />}
      </Wrapper>}    
    </>
  )
}

export default TitledParagraphWithImage