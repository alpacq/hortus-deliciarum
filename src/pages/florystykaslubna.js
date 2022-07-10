import * as React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import { Button } from "../components/atoms/Button/Button"
import LongTable from "../layout/LongTable"
import logo from "../images/Group 9.svg"
import wedA from "../images/wedA.png"
import wedB from "../images/wedB.png"
import wedC from "../images/wedC.png"
import wedD from "../images/wedD.png"
import wedE from "../images/wedE.png"
import ornament from "../images/titleOrnament.svg"
import wed1 from "../images/wedding (1).png"
import wed2 from "../images/wedding (2).png"
import wed3 from "../images/wedding (3).png"
import wed4 from "../images/wedding (4).png"
import wed5 from "../images/wedding (5).png"
import wed6 from "../images/wedding (6).png"
import wed7 from "../images/wedding (7).png"
import wed8 from "../images/wedding (8).png"
import wed9 from "../images/wedding (9).png"
import wed10 from "../images/wedding (10).png"
import wed11 from "../images/wedding (11).png"
import wed12 from "../images/wedding (12).png"
import wed13 from "../images/wedding (13).png"
import mobileOrnamentSandBig from "../images/mobileOrnamentSandBig.svg"
import OrnamentImg from "../components/atoms/OrnamentImg/OrnamentImg"
import ColImg from "../components/atoms/ColImg/ColImg"
import { Paragraph } from "../components/atoms/Paragraph/Paragraph"
import CenteredTitle from "../components/molecules/CenteredTitle/CenteredTitle"
import LogoTitle from "../components/atoms/LogoTitle/LogoTitle"
import Carousel from "../components/molecules/Carousel/Carousel"
import MobileNavItem from "../components/molecules/MobileNavItem/MobileNavItem"
import arrowUp from "../images/mobileArrowUpSand.svg"
import MobileNavMenu from "../components/organisms/MobileNavMenu/MobileNavMenu"

const WeddingsPage = () => {
  const metaTag = 'Bukiety ślubne, butonierki, wianek ślubny, prezenty dla rodziców. Będziemy zaszczyceni mogąc zatroszczyć się o Wasze wesele!'
  const title = "Ślub jak z bajki"
  const firstPar = "Oferujemy aranżację wesela od A do Z. Możecie być więc spokojni o bukiet ślubny, butonierki czy podarunki dla rodziców. Wyczarujemy dla Was także najpiękniejszy wianek ślubny. Nasze doświadczenie rękodzielnicze, artystyczne i florystyczne sprawia, że każda ślubna aranżacja dopięta jest na ostatni guzik."
  const secondPar = "Wybrane przez Was sale weselne traktujemy jak czyste płótno – wykańczamy je z dbałością o najmniejszy szczegół."
  const thirdPar = "Będziemy zaszczyceni mogąc zatroszczyć się o Wasze ślubne przedsięwzięcie! Nasz kalendarz na 2022 rok pozostaje otwarty. Jeśli więc szukacie florystek ślubnych w Warszawie i okolicach – zapraszamy do kontaktu!"
  const additionalText = "Każdą zainteresowaną współpracą z nami Parę Młodą zapraszamy do pracowni, aby ustalić wspólnie zamysł, estetykę i budżet. Cena florystyki ślubnej zależy od Waszego pomysłu, a co za tym idzie – ilości dekoracji. Po spotkaniu wyślemy spersonalizowaną ofertę wraz z wyceną. Do Was należy ostateczna decyzja."
  const strongText = "Niezależnie od tego czy bliższe Waszemu sercu są klimaty boho czy glamour – możemy obiecać, że stworzymy dla Was coś pięknego."
  const wedImages = [wed1, wed2, wed3, wed4, wed5, wed6, wed7, wed8, wed9, wed10, wed11, wed12, wed13]
  const wedAlts = [
    "Dekoracje kwiatowe na stół", "Dekoracja stołu Państwa Młodych", "Bukiety ślubne boho", "Wesele boho", "Bukiet Panny Młodej", 
    "Dekoracje na wesele", "Inspiracje na wesele", "Dekoracja sali weselnej", "Girlanda z kwiatów ciętych", "Wianek boho na ślub",
    "Peonie na ślub", "Detale na ślub", "Bukiet Panny Młodej"
  ]

  return (
    <Layout title="Kwiaty na ślub i aranżacja wesel od A do Z – zapraszamy do kontaktu!" metaTag={metaTag} >
      <LogoTitle id="top" logoUrl={logo} isMobile />
      <Section isLong>
        <MobileNavMenu isExpandable />
        <CenteredTitle title={title} />
        <CenteredTitle isMobile title={title} />
        <OrnamentImg isDesktop imageUrl={ornament} imageAlt="" />
        <Paragraph>{firstPar}</Paragraph>
        <Paragraph><strong>{secondPar}</strong></Paragraph>
        <Paragraph>{thirdPar}</Paragraph>
        <Button isBig isCentered to="/formularz">skontaktuj się z nami</Button>
        <Button isMobile noMargin to="/formularz">skontaktuj się</Button>
        <ColImg isMobile imageUrl={wedB} imageAlt="" />
        <LongTable>
          <ColImg imageUrl={wedA} imageAlt="Aranżacja wesela w Warszawie" />
          <ColImg imageUrl={wedB} imageAlt="Wesele w plenerze" />
        </LongTable>
        <Paragraph>{additionalText}</Paragraph>
        <Paragraph><strong>{strongText}</strong></Paragraph>        
        <ColImg hasMargin isDesktop imageUrl={wedC} imageAlt="Wymarzone bukiety ślubne" />
        <LongTable>
          <ColImg imageUrl={wedD} imageAlt="Bukiet ślubny z jedwabną wstążką" />
          <ColImg imageUrl={wedE} imageAlt="Girlanda z kwiatów" />
        </LongTable>
      </Section>
      <Carousel isFullscreen imageUrls={wedImages} imageAlts={wedAlts} moveBy={100} numSlides={13} visibleSlides={1} />
      <Carousel isMobile imageUrls={wedImages} imageAlts={wedAlts} moveBy={85} numSlides={13} visibleSlides={1} />
      <Button isBig isCentered to="/formularz">umów się na spotkanie</Button>
      <OrnamentImg isMobile hasMargin imageUrl={mobileOrnamentSandBig} imageAlt="" />
      <MobileNavItem imageUrl={arrowUp} isScrollTop text="wróć do góry" />
    </Layout>
  )
}

export default WeddingsPage