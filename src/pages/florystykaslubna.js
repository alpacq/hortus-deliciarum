import * as React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import weddingComposition from "../images/Dominika&Bartłomiej_298 2.png"
import LongTable from "../layout/LongTable"
import LongColumn from "../layout/LongColumn"
import img1col1 from "../images/img1col1.png"
import img2col1 from "../images/img2col1.png"
import img3col1 from "../images/img3col1.png"
import img1col2 from "../images/img1col2.png"
import img2col2 from "../images/img2col2.png"
import img3col2 from "../images/img3col2.png"
import wed1 from "../images/wedding (1).png"
import wed2 from "../images/wedding (2).png"
import wed3 from "../images/wedding (3).png"
import wed4 from "../images/wedding (4).png"
import wed5 from "../images/wedding (5).png"
import wed6 from "../images/wedding (6).png"
import wed7 from "../images/wedding (7).png"
import wed8 from "../images/wedding (8).png"
import wed9 from "../images/wedding (9).png"
import ornament from "../images/ozdwed.svg"
import ColImg from "../components/atoms/ColImg/ColImg"
import { Paragraph } from "../components/atoms/Paragraph/Paragraph"
import CarouselWithButton from "../components/organisms/CarouselWithButton/CarouselWithButton"

const WeddingsPage = () => {
  const weddingsTitle = "Ślub jak z bajki"
  const weddingsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  const additionalText = "Każdą zainteresowaną współpracą z nami Parę Młodą zapraszamy do pracowni, aby ustalić wspólnie zamysł, estetykę i budżet. Cena florystyki ślubnej zależy od Waszego pomysłu, a co za tym idzie – ilości dekoracji. Po spotkaniu wyślemy spersonalizowaną ofertę wraz z wyceną. Do Was należy ostateczna decyzja."
  const strongText = "Niezależnie od tego czy bliższe Waszemu sercu są klimaty boho czy glamour – możemy obiecać, że stworzymy dla Was coś pięknego."
  const wedImages = [wed9, wed8, wed7, wed6, wed5, wed4, wed3, wed2, wed1]

  return (
    <Layout title="Florystyka ślubna" screensHeight={4.8}>
      <Section>
        <TitledParagraphWithImage
          title={weddingsTitle}
          text={weddingsText}
          imageUrl={weddingComposition}
          imageAlt="weselna kompozycja kwiatowa"
          hasButton
          isButtonBig
          buttonText="skontaktuj się z nami"
          linkUrl="/formularz" />
      </Section>
      <Section isLong isMulti longSectionHeight={2.4}>
        <LongTable>
          <LongColumn>
            <ColImg imageUrl={img1col1} imageAlt="" />
            <ColImg imageUrl={img2col1} imageAlt="" />
          </LongColumn>
          <LongColumn>
            <Paragraph>
              {additionalText}
            </Paragraph>
            <Paragraph>
              <strong>{strongText}</strong>
            </Paragraph>
            <ColImg isAbsolute imageUrl={ornament} imageAlt="" absHeight={214} />
            <ColImg imageUrl={img1col2} imageAlt="" />
            <ColImg imageUrl={img2col2} imageAlt="" />
          </LongColumn>
        </LongTable>
      </Section>
      <Section>
        <LongTable>
          <LongColumn isSmall>
            <ColImg isSmall imageUrl={img3col1} imageAlt="" />
          </LongColumn>
          <LongColumn isSmall>
            <ColImg isSmall imageUrl={img3col2} imageAlt="" />
          </LongColumn>
        </LongTable>        
      </Section>
      <Section> 
        <CarouselWithButton imageUrls={wedImages} moveBy={100} numSlides={9} visibleSlides={1} buttonText="umów się na spotkanie" linkUrl="/formularz" />
      </Section>
    </Layout>
  )
}

export default WeddingsPage