import React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import LongColumn from "../layout/LongColumn"
import LongTable from "../layout/LongTable"
import CenteredTitle from "../components/molecules/CenteredTitle/CenteredTitle"
import { Paragraph } from "../components/atoms/Paragraph/Paragraph"
import ornament from "../images/titleOrnament.svg"
import pn1 from "../images/pn1.png"
import pn2 from "../images/pn2.png"
import pn3 from "../images/pn3.png"
import pn4 from "../images/pn4.png"
import pn5 from "../images/pn5.png"
import ColImg from "../components/atoms/ColImg/ColImg"
import OrnamentImg from "../components/atoms/OrnamentImg/OrnamentImg"
import Motto from "../components/atoms/Motto/Motto"
import { StyledLink } from "../components/atoms/StyledLink/StyledLink"

const MeetUsPage = () => {
  const title = "O zamiłowaniu do \nsztuki i rękodzieła"
  const firstPar = "Choć na pierwszy rzut oka możemy jawić się jako kwiaciarnia, dla nas to określenie raczej nie oddaje klimatu miejsca jakim jest Hortus Deliciarum. Sami określilibyśmy się jako mała, rodzinna pracownia florystyczna – miejsce rodem z Alicji w Krainie Czarów. W naszych progach możecie poczuć klimat rzemiosła i rękodzieła, a w naszych pracach serce, które wkładamy w każdą roślinną (i nie tylko) kompozycję."
  const mottoText = "Ostatecznie nasza pracownia to miejsce powstałe z potrzeby tworzenia i dzielenia się pięknem."
  const secondPar = "Na co dzień nasza kwiaciarnia stacjonuje w Warszawie, na Starych Bielanach, przy Kasprowicza 68. To tutaj tworzymy dla Was małe arcydzieła. Najczęściej spotkacie tu nasze dwie florystki: Olę i Zuzię – mamę i córkę. To od nich zaczęła się nasza kwietna pasja."
  const richSecondPar = {
    __html: secondPar.replace("Najczęściej spotkacie tu nasze dwie florystki: Olę i Zuzię – mamę i córkę.", "<strong>Najczęściej spotkacie tu nasze dwie florystki: Olę i Zuzię – mamę i córkę.</strong>")
  }
  const thirdPar = "Umiłowanie historii sztuki i malarstwa tej młodszej, wraz z zacięciem stolarskim i rękodzielniczym starszej, pozwoliło na stworzenie magicznej przestrzeni. Każdy z elementów pracowni ma bowiem swoją historię: zaprojektowane i stworzone od podstaw bądź odrestaurowane przez Olę meble (takie z duszą kochamy najbardziej!) stanowią bazę dla naszego wyposażenia. Masywne, odnowione drzwi (pierwotnie spisane na straty), obrazy z babcinego domu, lustra i ramy z drugiej ręki – retro i vintage – taki właśnie panuje u nas klimat."
  const fourthPar = " możecie z kolei spodziewać się odwołań i ciekawostek ze świata malarstwa, z którego czerpiemy inspiracje do naszych kompozycji."
  const fifthPar = "Nasza kwiaciarnia to nie tylko kwiaty czy wszelkie dodatki. To przede wszystkim Wasze historie, a uwierzcie – naszych klientów znamy naprawdę dobrze! Być może to właśnie przytulny klimat tego miejsca sprawia, że tak chętnie dzielicie się z nami swoimi przeżyciami i wspólnie tworzycie społeczność osób ceniących piękno."
  const sixthPar = "Nie pozostaje nam nic innego jak tylko zaprosić Was do naszej kwiaciarni na Kasprowicza 68 w Warszawie, poznać nasz świat i zostać w nim na dłużej!"

  return (
    <Layout title="Poznaj nas">
      <Section isLong>
        <CenteredTitle title={title} />
        <OrnamentImg imageUrl={ornament} imageAlt="" />
        <Paragraph>{firstPar}</Paragraph>
        <Motto isBold text={mottoText} />
        <LongTable>
          <ColImg imageUrl={pn1} imageAlt="" />
          <ColImg imageUrl={pn2} imageAlt="" />
        </LongTable>
        <Paragraph dangerouslySetInnerHTML={richSecondPar} />
        <Paragraph>{thirdPar}</Paragraph>
        <ColImg imageUrl={pn3} imageAlt="" />
        <Paragraph><StyledLink href="https://www.instagram.com/hortusdeliciarum/" target="_blank" rel="noopener noreferrer">Na naszym Instagramie</StyledLink>{fourthPar}</Paragraph>
        <Paragraph>{fifthPar}</Paragraph>
        <LongTable>
          <ColImg imageUrl={pn4} imageAlt="" />
          <ColImg imageUrl={pn5} imageAlt="" />
        </LongTable>
        <Paragraph><strong>{sixthPar}</strong></Paragraph>
      </Section>
    </Layout>
  )
}

export default MeetUsPage