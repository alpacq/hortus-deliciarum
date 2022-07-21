import * as React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import TitledParagraph from "../components/molecules/TitledParagraph/TitledParagraph"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import logo from "../images/Group 9.svg"
import headerImg from "../images/IMG_9633 1 (2).png"
import flowers9x9 from "../images/Group 19.png"
import donica from "../images/IMG_9633 1 (3).png"
import weddingShoot from "../images/Fot-107 1.png"
import ciete1 from "../images/ciete1.png"
import ciete2 from "../images/ciete2.png"
import ciete3 from "../images/ciete3.png"
import ciete4 from "../images/ciete4.png"
import adds1 from "../images/adds (1).png"
import adds2 from "../images/adds (2).png"
import adds3 from "../images/adds (3).png"
import adds4 from "../images/adds (4).png"
import adds5 from "../images/adds (5).png"
import adds6 from "../images/adds (6).png"
import adds7 from "../images/adds (7).png"
import adds8 from "../images/adds (8).png"
import adds9 from "../images/adds (9).png"
import adds10 from "../images/adds (10).png"
import adds11 from "../images/adds (11).png"
import adds12 from "../images/adds (12).png"
import adds13 from "../images/adds (13).png"
import aranz from "../images/aranz.png"
import wyn1 from "../images/wynajem (1).png"
import wyn6 from "../images/wynajem (6).png"
import wynM1 from "../images/wynM1.png"
import wynM2 from "../images/wynM2.png"
import wynM3 from "../images/wynM3.png"
import arrowUp from "../images/mobileArrowUpSand.svg"
import mobileOrnamentSandBig from "../images/mobileOrnamentSandBig.svg"
import TitledParagraphWithCarousel from "../components/organisms/TitledParagraphWithCarousel/TitledParagraphWithCarousel"
import TitledParagraphWithSideCarousel from "../components/organisms/TitledParagraphWithSideCarousel/TitledParagraphWithSideCarousel"
import LogoTitle from "../components/atoms/LogoTitle/LogoTitle"
import ColImg from "../components/atoms/ColImg/ColImg"
import OrnamentImg from "../components/atoms/OrnamentImg/OrnamentImg"
import Carousel from "../components/molecules/Carousel/Carousel"
import MobileNavItem from "../components/molecules/MobileNavItem/MobileNavItem"
import MobileNavMenu from "../components/organisms/MobileNavMenu/MobileNavMenu"

const OfferPage = () => {
  const metaTag = 'Oprócz kolekcji kwiatów ciętych i roślin znajdziecie tu sojowe świece, ceramikę, biżuterię, portugalskie mydła czy flowerboxy.'
  const addsImages = [adds1, adds2, adds3, adds4, adds5, adds6, adds7, adds8, adds9, adds10, adds11, adds12, adds13]
  const addsAlts = [
    "Flowerboxy", "Naturalne mydła portugalskie", "Ceramika i rękodzieło", "Naturalne świece sojowe", "Zestawy prezentowe", "Donice i osłonki",
    "Ceramika i dodatki", "Ręcznie wykonana ceramika", "Eleganckie mydła portugalskie", "Pomysły na prezent", "Kartki okolicznościowe", 
    "Duży wybór zapachowych świec sojowych", "Welurowe fowerboxy"
  ]
  const wynImages = [weddingShoot, wyn1, wyn6]
  const wynAlts = [
    "Przestrzeń do sesji zdjęciowych", "Niekonwencjonalne sesje ślubne", "Wynajem pracowni"
  ]
  const wynMobileImages = [wynM1, wynM2, wynM3]
  const offerTitle = 'W naszych progach...'
  const offerText = 'W naszej warszawskiej pracowni czekają na Was kwiaty cięte, rośliny doniczkowe oraz rękodzieło. Dla miłośników tego ostatniego mamy sojowe świece, ceramikę, biżuterię, portugalskie mydła czy kompozycje z drewna. Na zamówienie chętnie wykonamy lasy w szkle, suszone bukiety i flowerboxy.\n\nPoznajcie naszą ofertę!'
  const cieteTitle = 'Kwiaty cięte'
  const cieteText = 'Choć z radością przygotujemy dla Was klasyczny bukiet 100 róż, przyznamy, że sami gustujemy w tych nieco bardziej ekstrawaganckich, szalonych, niecodziennych. A oprócz wykorzystania świeżych i pachnących kwiatów, tworzymy także bukiety suszone – długowieczne, które będą zdobić Wasze przestrzenie znacznie dłużej!\n\nJeśli chcecie zamówić wymarzony bukiet, zadzwońcie do nas z kilkudniowym wyprzedzeniem. Będzie czekał na Was do odbioru w pracowni.'
  const doniczkoweTitle = 'Rośliny doniczkowe'
  const doniczkoweText = 'Nasze zielone królestwo po brzegi wypełniają rośliny doniczkowe zarówno dla początkujących jak i bardziej zaawansowanych miłośników. Dbamy o dostępność tych popularnych, ale również niecodziennych okazów, a do każdego z nich pomożemy dobrać odpowiednią osłonkę z całej naszej kolekcji. Nie zostawimy Was też bez wskazówek odnośnie opieki!'
  const dodatkiTitle = 'Jeszcze więcej piękna'
  const dodatkiTitleMobile = 'Więcej piękna'
  const dodatkiText = 'Oprócz baśniowych bukietów i zachwycających roślin doniczkowych znajdziecie u nas naturalne świece sojowe, obłędnie pachnące mydła portugalskie i ręcznie wykonaną ceramikę – zarówno donice, osłonki, jak i biżuterię czy dodatki do Waszych wnętrz. Na zamówienie wykonamy las w szkle. Możemy też obiecać, że pomożemy wybrać doskonały prezent na każdą okazję.'
  const aranzacjaTitle = 'Aranżacja przestrzeni'
  const aranzacjaText = 'Poza salami weselnymi zazieleniamy Wasze balkony, pokoje, a także biura. Jeśli nie macie pomysłu jak najlepiej zagospodarować przestrzeń, potrzebujecie pomocy w wyborze roślin, które sprawdzą się w danych warunkach i nie wiecie jaką ceramikę i dodatki wybrać – z przyjemnością podejmiemy się wyzwania i tchniemy drugie życie w Wasze progi.'
  const wynajemTitle = 'Wynajem pracowni'
  const wynajemText = 'Jeśli szukacie przestrzeni z duszą i klimatem, gdzie stworzycie niecodzienną sesję zdjęciową, sesję ślubną lub zorganizujecie warsztaty – chętnie zaangażujemy się w podobne projekty. Na swoim koncie mamy sesje zdjęciowe, nagrania, warsztaty a nawet... teledysk.\n\nPomożemy zaaranżować pracownię wedle Waszych potrzeb.'

  return (      
    <Layout title="Bukiety, rośliny, ceramika i dodatki – poznajcie naszą ofertę!" metaTag={metaTag} isScrollSnap>
      <LogoTitle id="top" logoUrl={logo} isMobile />
      <Section isMobile>
        <MobileNavMenu isExpandable />
        <TitledParagraphWithImage 
          isMobile
          title={offerTitle}
          text={offerText.replace("Poznajcie naszą ofertę!", "<span>Poznajcie naszą ofertę!</span>")}
          imageUrl={headerImg}
          imageAlt="Rośliny doniczkowe"
        />
      </Section>
      <Section id="ciete" isMobile> 
        <TitledParagraphWithImage 
          isCutted
          title={cieteTitle}
          text={cieteText}
          imageUrl={flowers9x9} 
          imageAlt="bukiety artystyczne z kwiatów ciętych" />
        <TitledParagraph
          isCutted 
          isMobile
          title={cieteTitle}
          text={cieteText} />
        <ColImg isMobile hasMargin imageUrl={ciete1} imageAlt="" />
        <ColImg isMobile hasMargin imageUrl={ciete2} imageAlt="" />
        <ColImg isMobile hasMargin imageUrl={ciete3} imageAlt="" />
        <ColImg isMobile hasMargin imageUrl={ciete4} imageAlt="" />
        <OrnamentImg isMobile imageUrl={mobileOrnamentSandBig} imageAlt="" />
      </Section>
      <Section id="doniczkowe" isMobile> 
        <TitledParagraphWithImage 
          isMobile
          isReversed
          title={doniczkoweTitle}
          text={doniczkoweText}
          hasButton
          hasMobileButton
          isMobileButtonUp
          mobileButtonText="zapytaj o roślinę"
          buttonText="zapytaj o okaz"
          linkUrl="/formularz"
          isButtonRight
          imageUrl={donica} 
          imageAlt="Rośliny do domu" />          
      </Section>  
      <Section id="dodatki" isMobile isMultiCarousel>
        <TitledParagraphWithCarousel
          title={dodatkiTitle}
          text={dodatkiText}
          imageUrls={addsImages}
          imageAlts={addsAlts} />
        <TitledParagraph 
          isMobile
          title={dodatkiTitleMobile}
          text={dodatkiText} />
        <Carousel isMobile imageUrls={addsImages} imageAlts={addsAlts} moveBy={95} numSlides={13} visibleSlides={1} />
        <OrnamentImg isMobile hasMargin imageUrl={mobileOrnamentSandBig} imageAlt="" />
      </Section>
      <Section id="aranzacja" isMobile>
        <TitledParagraphWithImage 
          isMobile
          title={aranzacjaTitle}
          text={aranzacjaText}
          hasButton
          hasMobileButton
          isMobileButtonUp
          mobileButtonText="napisz do nas"
          buttonText="napisz do nas"
          linkUrl="/formularz"
          imageUrl={aranz}
          imageAlt="Aranżacja biur, wesel i mieszkań" />
      </Section>
      <Section id="wynajem" isMobile isMultiCarousel>
        <TitledParagraphWithSideCarousel 
          isReversed
          title={wynajemTitle}
          text={wynajemText}
          hasButton
          buttonText="umów termin"
          linkUrl="/formularz"
          imageUrls={wynImages}
          imageAlts={wynAlts} />
        <TitledParagraph
          isMobile
          title={wynajemTitle}
          text={wynajemText}
          hasMobileButton
          isMobileButtonUp
          mobileButtonText="umów termin"
          linkUrl="/formularz" />
        <Carousel isMobile imageUrls={wynMobileImages} imageAlts={wynAlts} moveBy={95} numSlides={3} visibleSlides={1} />
        <OrnamentImg isMobile hasMargin imageUrl={mobileOrnamentSandBig} imageAlt="" />
        <MobileNavItem imageUrl={arrowUp} isScrollTop text="wróć do góry" />
      </Section>
    </Layout>    
  )
}

export default OfferPage
