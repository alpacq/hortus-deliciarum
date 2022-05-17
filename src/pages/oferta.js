import * as React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import headerImg from "../images/IMG_9633 1 (2).png"
import flowers9x9 from "../images/Group 17.png"
import donica from "../images/IMG_9633 1 (3).png"
import weddingShoot from "../images/Fot-107 1.png"
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
import wyn2 from "../images/wynajem (2).png"
import wyn3 from "../images/wynajem (3).png"
import wyn4 from "../images/wynajem (4).png"
import wyn5 from "../images/wynajem (5).png"
import wyn6 from "../images/wynajem (6).png"
import TitledParagraphWithCarousel from "../components/organisms/TitledParagraphWithCarousel/TitledParagraphWithCarousel"
import TitledParagraphWithSideCarousel from "../components/organisms/TitledParagraphWithSideCarousel/TitledParagraphWithSideCarousel"

const OfferPage = () => {
  const addsImages = [adds1, adds2, adds3, adds4, adds5, adds6, adds7, adds8, adds9, adds10, adds11, adds12, adds13]
  const wynImages = [weddingShoot, wyn1, wyn6, wyn5, wyn4, wyn3, wyn2]
  const offerTitle = 'W naszych progach...'
  const offerText = 'W naszej warszawskiej pracowni czekają na Was kwiaty cięte, rośliny doniczkowe oraz rękodzieło. Dla miłośników tego ostatniego mamy sojowe świece, ceramikę, biżuterię, portugalskie mydła czy kompozycje z drewna. Na zamówienie chętnie wykonamy lasy w szkle, suszone bukiety i flowerboxy.\n\nPoznajcie naszą ofertę!'
  const cieteTitle = 'Kwiaty cięte'
  const cieteText = 'Choć z radością przygotujemy dla Was klasyczny bukiet 100 róż, przyznamy, że sami gustujemy w tych nieco bardziej ekstrawaganckich, szalonych, niecodziennych. A oprócz wykorzystania świeżych i pachnących kwiatów, tworzymy także bukiety suszone – długowieczne, które będą zdobić Wasze przestrzenie znacznie dłużej!\n\nOferujemy także dowóz kwiatów w cenie bukietu na terenie Starych Bielan.'
  const doniczkoweTitle = 'Rośliny doniczkowe'
  const doniczkoweText = 'Nasze zielone królestwo po brzegi wypełniają rośliny doniczkowe zarówno dla początkujących jak i bardziej zaawansowanych miłośników. Dbamy o dostępność tych popularnych, ale również niecodziennych okazów, a do każdego z nich pomożemy dobrać odpowiednią osłonkę z całej naszej kolekcji. Nie zostawimy Was też bez wskazówek odnośnie opieki!'
  const dodatkiTitle = 'Jeszcze więcej piękna'
  const dodatkiText = 'Oprócz baśniowych bukietów i zachwycających roślin doniczkowych znajdziecie u nas naturalne świece sojowe, obłędnie pachnące mydła portugalskie i ręcznie wykonaną ceramikę – zarówno donice, osłonki, jak i biżuterię czy dodatki do Waszych wnętrz. Na zamówienie wykonamy las w szkle. Możemy też obiecać, że pomożemy wybrać doskonały prezent na każdą okazję.'
  const aranzacjaTitle = 'Aranżacja przestrzeni'
  const aranzacjaText = 'Poza salami weselnymi zazieleniamy Wasze balkony, pokoje, a także biura. Jeśli nie macie pomysłu jak najlepiej zagospodarować przestrzeń, potrzebujecie pomocy w wyborze roślin, które sprawdzą się w danych warunkach i nie wiecie jaką ceramikę i dodatki wybrać – z przyjemnością podejmiemy się wyzwania i tchniemy drugie życie w Wasze progi.'
  const wynajemTitle = 'Wynajem pracowni'
  const wynajemText = 'Jeśli szukacie przestrzeni z duszą i klimatem, gdzie stworzycie niecodzienną sesję zdjęciową, sesję ślubną lub zorganizujecie warsztaty – chętnie zaangażujemy się w podobne projekty. Na swoim koncie mamy sesje zdjęciowe, nagrania, warsztaty a nawet... teledysk.\n\nPomożemy zaaranżować pracownię wedle Waszych potrzeb.'

  return (      
    <Layout title="Oferta" isScrollSnap>
      <Section>
        <TitledParagraphWithImage 
          title={offerTitle}
          text={offerText}
          imageUrl={headerImg}
          imageAlt="rośliny doniczkowe na pianinie"
        />
      </Section>
      <Section id="ciete"> 
        <TitledParagraphWithImage 
          title={cieteTitle}
          text={cieteText}
          hasButton
          buttonText="zamów bukiet"
          linkUrl="/formularz"
          imageUrl={flowers9x9} 
          imageAlt="bukiety artystyczne z kwiatów ciętych" />
      </Section>
      <Section id="doniczkowe"> 
        <TitledParagraphWithImage 
          isReversed
          title={doniczkoweTitle}
          text={doniczkoweText}
          hasButton
          buttonText="zapytaj o okaz"
          linkUrl="/formularz"
          isButtonRight
          imageUrl={donica} 
          imageAlt="kwiaty doniczkowe" />          
      </Section>  
      <Section id="dodatki">
        <TitledParagraphWithCarousel
          title={dodatkiTitle}
          text={dodatkiText}
          imageUrls={addsImages} />
      </Section>
      <Section id="aranzacja">
        <TitledParagraphWithImage 
          title={aranzacjaTitle}
          text={aranzacjaText}
          hasButton
          buttonText="napisz do nas"
          linkUrl="/formularz"
          imageUrl={aranz}
          imageAlt="aranżacja przestrzeni" />
      </Section>
      <Section id="wynajem">
        <TitledParagraphWithSideCarousel 
          isReversed
          title={wynajemTitle}
          text={wynajemText}
          hasButton
          buttonText="umów termin"
          linkUrl="/formularz"
          imageUrls={wynImages} />
      </Section>
    </Layout>    
  )
}

export default OfferPage
