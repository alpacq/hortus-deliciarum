import React from "react"
import Layout from "../layout/Layout"
import ContactForm from "../components/organisms/ContactForm/ContactForm"
import LandingImage from "../components/atoms/LandingImage/LandingImage"
import LogoTitle from "../components/atoms/LogoTitle/LogoTitle"
import Section from "../layout/Section"
import Motto from "../components/atoms/Motto/Motto"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import logo from "../images/Group 10.svg"
import circle from "../images/kółko.png"
import flower from "../images/kwiatek.png"
import mobileFlower from "../images/mobileflower.png"
import offerBuquet from "../images/20211214_122512 1.png"
import weddingComposition from "../images/wedA.png"
import ourFlowerShop from "../images/IMG_9633 1.png"
import finalFlower from "../images/blue 1.png"
import arrowUp from "../images/mobileArrowUpGreen.svg"
import MobileNavItem from "../components/molecules/MobileNavItem/MobileNavItem"
import MobileNavMenu from "../components/organisms/MobileNavMenu/MobileNavMenu"

const IndexPage = () => {
  const offerTitle = 'Oferta'
  const metaTag = 'Szukasz kwiaciarni w Warszawie? W naszych progach znajdziesz kwiaty, rośliny i rękodzieło. Zajmujemy się także florystyką ślubną.'
  const offerText = 'Choć specjalizujemy się w bukietach, w tym także bukietach ślubnych, i zazielenianiu Waszych mieszkań, świeże kwiaty cięte i rośliny doniczkowe to tylko część piękna, które czeka w progach naszej pracowni na Starych Bielanach...'
  const weddingTitle = 'Florystyka ślubna'
  const weddingText = 'Nasze doświadczenie rękodzielnicze, artystycznei florystyczne sprawia, że każda ślubna aranżacja dopięta jest na ostatni guzik. Będziemy zaszczyceni mogąc zatroszczyć się o Wasze sale weselne, ślubne bukiety, wianki czy podarunki dla rodziców.'
  const meetUsTitle = 'Poznaj nas'
  const meetUsText = 'Szukasz kwiaciarni w Warszawie? Sami określilibyśmy się raczej jako mała, rodzinna pracownia florystyczna. Hortus Deliciarum to miejsce z duszą, powstałe z potrzeby tworzenia i dzielenia się pięknem.'
  const contactTitle = 'Czekamy na ciebie'
  const contactInfo = "adres\nul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa\n\ngodziny otwarcia\nponiedziałek – piątek: 10.00 - 19.00\nsobota: 10.00 - 16.00\n\nkontakt\ntel. +48 519 059 013\ne-mail: kontakt@hortusdeliciarum.pl"
  const mottoText = "Miejsce tworzone rodzinną pasją umiłowania piękna."
  const formTitle = "Napisz do nas"

  return (
    <Layout isScrollSnap title="Pracownia florystyczna w sercu warszawskich Bielan." metaTag={metaTag} isGreen>
      <LandingImage imageUrl={circle} />
      <LandingImage imageUrl={flower} imageAlt="Pracownia florystyczna w Warszawie" isTop />
      <LandingImage imageUrl={mobileFlower} imageAlt="Pracownia florystyczna w Warszawie" isMobile />
      <LogoTitle id="top" logoUrl={logo}/>
      <Section id="mainpage" isMobile>
        <MobileNavMenu isGreen />
        <Motto isAbsolute isLarge isGreen text={mottoText} />
      </Section>
      <Section id="firstScroll" isMobile>
        <TitledParagraphWithImage 
          isMobile
          title={offerTitle}
          text={offerText}
          isGreen
          hasButton
          hasMobileButton
          buttonText="czytaj więcej"
          mobileButtonText="zobacz więcej"
          linkUrl="/oferta"
          isButtonRight
          imageUrl={offerBuquet} 
          imageAlt="Kwiaty cięte i bukiety ślubne" />          
      </Section>  
      <Section isMobile>
        <TitledParagraphWithImage
          isMobile
          isReversed
          title={weddingTitle}
          text={weddingText}
          isGreen
          hasButton
          hasMobileButton
          buttonText="czytaj więcej"
          mobileButtonText="zobacz więcej"
          linkUrl="/florystykaslubna"
          imageUrl={weddingComposition}
          imageAlt="Florystyka ślubna" />
      </Section>
      <Section isMobile>
        <TitledParagraphWithImage
          isMobile
          title={meetUsTitle}
          text={meetUsText}
          isGreen
          hasButton
          hasMobileButton
          buttonText="czytaj więcej"
          mobileButtonText="zobacz więcej"
          linkUrl="/poznajnas"
          isButtonRight
          imageUrl={ourFlowerShop}
          imageAlt="Kwiaciarnia w Warszawie" />
      </Section>
      <Section isMobile>
        <TitledParagraphWithImage
          isMobile
          isReversed
          isFinal
          hasMobileButton
          linkUrl="/formularz"
          mobileButtonText="skontaktuj się"
          title={contactTitle}
          text={contactInfo.replace(`ul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa`, `<a href="https://www.google.pl/maps/place/Hortus+Deliciarum+-+pracownia+florystyczna/@52.2865879,20.9376573,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecbc914681923:0x2ed7ecebd338ebd2!8m2!3d52.2865846!4d20.939846" target="_blank" rel="noopener noreferrer">ul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa</a>`)
                           .replace("adres", "<strong>adres</strong>")
                           .replace("godziny otwarcia", "<strong>godziny otwarcia</strong>")
                           .replace("kontakt", "<strong>kontakt</strong>")}
          isGreen
          imageUrl={finalFlower}
          imageAlt="Skontaktuj się z nami!" />
        <MobileNavItem isGreen imageUrl={arrowUp} isScrollTop text="wróć do góry" />
      </Section>
      <Section isFinal>
        <ContactForm isGreen title={formTitle} />
      </Section>
    </Layout>      
  )
}

export default IndexPage
