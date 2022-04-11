import * as React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import flowers9x9 from "../images/Group 17.png"
import weddingShoot from "../images/Fot-107 1.png"
import adds1 from "../images/Rectangle 6.png"
import adds2 from "../images/Rectangle 7.png"
import TitledParagraphWithCarousel from "../components/organisms/TitledParagraphWithCarousel/TitledParagraphWithCarousel"

const OfferPage = () => {
  const addsImages = [adds1, adds2, adds1, adds2]
  return (      
    <Layout title="Oferta" isScrollSnap>
      <Section id="ciete"> 
        <TitledParagraphWithImage 
          title="kwiaty cięte"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          hasButton
          buttonText="zamów bukiet"
          linkUrl="/kontakt"
          imageUrl={flowers9x9} 
          imageAlt="bukiety artystyczne z kwiatów ciętych" />
      </Section>
      <Section id="doniczkowe"> 
        <TitledParagraphWithImage 
          isReversed
          title="rośliny doniczkowe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          hasButton
          buttonText="zapytaj o okaz"
          linkUrl="/kontakt"
          imageUrl="" 
          imageAlt="kwiaty doniczkowe" />          
      </Section>  
      <Section id="dodatki">
        <TitledParagraphWithCarousel
          title="Dodatki"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
          imageUrls={addsImages} />
      </Section>
      <Section id="aranzacja">
        <TitledParagraphWithImage 
          title="aranżacja przestrzeni"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          hasButton
          buttonText="napisz do nas"
          linkUrl="/kontakt"
          imageUrl=""
          imageAlt="aranżacja przestrzeni" />
      </Section>
      <Section id="wynajem">
        <TitledParagraphWithImage 
          isReversed
          title="wynajem pracowni"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          hasButton
          buttonText="napisz do nas"
          linkUrl="/kontakt"
          imageUrl={weddingShoot} 
          imageAlt="romantyczna sesja ślubna w pięknej przestrzeni z kwiatami" />
      </Section>
    </Layout>    
  )
}

export default OfferPage
