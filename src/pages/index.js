import * as React from "react"
import Layout from "../layout/Layout"
import LandingImage from "../components/atoms/LandingImage/LandingImage"
import LogoTitle from "../components/atoms/LogoTitle/LogoTitle"
import Section from "../layout/Section"
import Motto from "../components/atoms/Motto/Motto"
import Arrow from "../components/atoms/Arrow/Arrow"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import circle from "../images/kółko.png"
import flower from "../images/kwiatek.png"
import offerBuquet from "../images/20211214_122512 1.png"
import weddingComposition from "../images/Dominika&Bartłomiej_298 2.png"
import ourFlowerShop from "../images/IMG_9633 1.png"
import finalFlower from "../images/Warstwa 4 1.svg"

const IndexPage = () => {
  const contactTitle = 'Czekamy \nna ciebie'
  const contactInfo = 'ul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa\n\nponiedziałek – piątek: 10.00 - 19.00\nsobota: 10.00 - 16.00\n\n\ntel. +48 519 059 013\ne-mail: kontakt@hortusdeliciarum.pl'
  return (
    <Layout isScrollSnap title="Hortus Deliciarum" isGreen>
      <LandingImage imageUrl={circle} />
      <LandingImage imageUrl={flower} isTop />
      <LogoTitle />
      <Section>        
        <Motto />
        <Arrow />
      </Section>
      <Section>
        <TitledParagraphWithImage 
          title="oferta"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          isGreen
          imageUrl={offerBuquet} 
          imageAlt="duży bukiet artystyczny" />          
      </Section>  
      <Section>
        <TitledParagraphWithImage
          isReversed
          title="Florystyka ślubna"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          isGreen
          hasButton
          buttonText="czytaj więcej"
          linkUrl="/florystykaslubna"
          imageUrl={weddingComposition}
          imageAlt="weselna kompozycja kwiatowa" />
      </Section>
      <Section>
        <TitledParagraphWithImage
          title="Poznaj nas"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
          isGreen
          hasButton
          buttonText="czytaj więcej"
          linkUrl="poznajnas"
          imageUrl={ourFlowerShop}
          imageAlt="kwiaciarnia Hortus Deliciarum" />
      </Section>
      <Section>
        <TitledParagraphWithImage
          isReversed
          isFinal
          title={contactTitle}
          text={contactInfo}
          isGreen
          imageUrl={finalFlower}
          imageAlt="" />
      </Section>
    </Layout>      
  )
}

export default IndexPage
