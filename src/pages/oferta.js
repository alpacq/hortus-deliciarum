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
  const metaTag = 'Opr??cz kolekcji kwiat??w ci??tych i ro??lin znajdziecie tu sojowe ??wiece, ceramik??, bi??uteri??, portugalskie myd??a czy flowerboxy.'
  const addsImages = [adds1, adds2, adds3, adds4, adds5, adds6, adds7, adds8, adds9, adds10, adds11, adds12, adds13]
  const addsAlts = [
    "Flowerboxy", "Naturalne myd??a portugalskie", "Ceramika i r??kodzie??o", "Naturalne ??wiece sojowe", "Zestawy prezentowe", "Donice i os??onki",
    "Ceramika i dodatki", "R??cznie wykonana ceramika", "Eleganckie myd??a portugalskie", "Pomys??y na prezent", "Kartki okoliczno??ciowe", 
    "Du??y wyb??r zapachowych ??wiec sojowych", "Welurowe fowerboxy"
  ]
  const wynImages = [weddingShoot, wyn1, wyn6]
  const wynAlts = [
    "Przestrze?? do sesji zdj??ciowych", "Niekonwencjonalne sesje ??lubne", "Wynajem pracowni"
  ]
  const wynMobileImages = [wynM1, wynM2, wynM3]
  const offerTitle = 'W naszych progach...'
  const offerText = 'W naszej warszawskiej pracowni czekaj?? na Was kwiaty ci??te, ro??liny doniczkowe oraz r??kodzie??o. Dla mi??o??nik??w tego ostatniego mamy sojowe ??wiece, ceramik??, bi??uteri??, portugalskie myd??a czy kompozycje z drewna. Na zam??wienie ch??tnie wykonamy lasy w szkle, suszone bukiety i flowerboxy.\n\nPoznajcie nasz?? ofert??!'
  const cieteTitle = 'Kwiaty ci??te'
  const cieteText = 'Cho?? z rado??ci?? przygotujemy dla Was klasyczny bukiet 100 r????, przyznamy, ??e sami gustujemy w tych nieco bardziej ekstrawaganckich, szalonych, niecodziennych. A opr??cz wykorzystania ??wie??ych i pachn??cych kwiat??w, tworzymy tak??e bukiety suszone ??? d??ugowieczne, kt??re b??d?? zdobi?? Wasze przestrzenie znacznie d??u??ej!\n\nJe??li chcecie zam??wi?? wymarzony bukiet, zadzwo??cie do nas z kilkudniowym wyprzedzeniem. B??dzie czeka?? na Was do odbioru w pracowni.'
  const doniczkoweTitle = 'Ro??liny doniczkowe'
  const doniczkoweText = 'Nasze zielone kr??lestwo po brzegi wype??niaj?? ro??liny doniczkowe zar??wno dla pocz??tkuj??cych jak i bardziej zaawansowanych mi??o??nik??w. Dbamy o dost??pno???? tych popularnych, ale r??wnie?? niecodziennych okaz??w, a do ka??dego z nich pomo??emy dobra?? odpowiedni?? os??onk?? z ca??ej naszej kolekcji. Nie zostawimy Was te?? bez wskaz??wek odno??nie opieki!'
  const dodatkiTitle = 'Jeszcze wi??cej pi??kna'
  const dodatkiTitleMobile = 'Wi??cej pi??kna'
  const dodatkiText = 'Opr??cz ba??niowych bukiet??w i zachwycaj??cych ro??lin doniczkowych znajdziecie u nas naturalne ??wiece sojowe, ob????dnie pachn??ce myd??a portugalskie i r??cznie wykonan?? ceramik?? ??? zar??wno donice, os??onki, jak i bi??uteri?? czy dodatki do Waszych wn??trz. Na zam??wienie wykonamy las w szkle. Mo??emy te?? obieca??, ??e pomo??emy wybra?? doskona??y prezent na ka??d?? okazj??.'
  const aranzacjaTitle = 'Aran??acja przestrzeni'
  const aranzacjaText = 'Poza salami weselnymi zazieleniamy Wasze balkony, pokoje, a tak??e biura. Je??li nie macie pomys??u jak najlepiej zagospodarowa?? przestrze??, potrzebujecie pomocy w wyborze ro??lin, kt??re sprawdz?? si?? w danych warunkach i nie wiecie jak?? ceramik?? i dodatki wybra?? ??? z przyjemno??ci?? podejmiemy si?? wyzwania i tchniemy drugie ??ycie w Wasze progi.'
  const wynajemTitle = 'Wynajem pracowni'
  const wynajemText = 'Je??li szukacie przestrzeni z dusz?? i klimatem, gdzie stworzycie niecodzienn?? sesj?? zdj??ciow??, sesj?? ??lubn?? lub zorganizujecie warsztaty ??? ch??tnie zaanga??ujemy si?? w podobne projekty. Na swoim koncie mamy sesje zdj??ciowe, nagrania, warsztaty a nawet... teledysk.\n\nPomo??emy zaaran??owa?? pracowni?? wedle Waszych potrzeb.'

  return (      
    <Layout title="Bukiety, ro??liny, ceramika i dodatki ??? poznajcie nasz?? ofert??!" metaTag={metaTag} isScrollSnap>
      <LogoTitle id="top" logoUrl={logo} isMobile />
      <Section isMobile>
        <MobileNavMenu isExpandable />
        <TitledParagraphWithImage 
          isMobile
          title={offerTitle}
          text={offerText.replace("Poznajcie nasz?? ofert??!", "<span>Poznajcie nasz?? ofert??!</span>")}
          imageUrl={headerImg}
          imageAlt="Ro??liny doniczkowe"
        />
      </Section>
      <Section id="ciete" isMobile> 
        <TitledParagraphWithImage 
          isCutted
          title={cieteTitle}
          text={cieteText}
          imageUrl={flowers9x9} 
          imageAlt="bukiety artystyczne z kwiat??w ci??tych" />
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
          mobileButtonText="zapytaj o ro??lin??"
          buttonText="zapytaj o okaz"
          linkUrl="/formularz"
          isButtonRight
          imageUrl={donica} 
          imageAlt="Ro??liny do domu" />          
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
          imageAlt="Aran??acja biur, wesel i mieszka??" />
      </Section>
      <Section id="wynajem" isMobile isMultiCarousel>
        <TitledParagraphWithSideCarousel 
          isReversed
          title={wynajemTitle}
          text={wynajemText}
          hasButton
          buttonText="um??w termin"
          linkUrl="/formularz"
          imageUrls={wynImages}
          imageAlts={wynAlts} />
        <TitledParagraph
          isMobile
          title={wynajemTitle}
          text={wynajemText}
          hasMobileButton
          isMobileButtonUp
          mobileButtonText="um??w termin"
          linkUrl="/formularz" />
        <Carousel isMobile imageUrls={wynMobileImages} imageAlts={wynAlts} moveBy={95} numSlides={3} visibleSlides={1} />
        <OrnamentImg isMobile hasMargin imageUrl={mobileOrnamentSandBig} imageAlt="" />
        <MobileNavItem imageUrl={arrowUp} isScrollTop text="wr???? do g??ry" />
      </Section>
    </Layout>    
  )
}

export default OfferPage
