import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import finalFlower from "../images/Warstwa 4 1.svg"

const ContactPage = () => {
  const contactTitle = "Czekamy na ciebie"
  const contactInfo = "adres\nul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa\n\ngodziny otwarcia\nponiedziałek – piątek: 10.00 - 19.00\nsobota: 10.00 - 16.00\n\n\nkontakt\ntel. +48 519 059 013\ne-mail: kontakt@hortusdeliciarum.pl"
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kontakt</title>
        {/* link rel="icon" type="image/png" href={logo} sizes="32x32" /> */}
      </Helmet>
      <Layout screensHeight={1}>
        <Section>
          <TitledParagraphWithImage
            isFinal
            title={contactTitle}
            text={contactInfo.replace("adres", "<strong>adres</strong>").replace("godziny otwarcia", "<strong>godziny otwarcia</strong>").replace("kontakt", "<strong>kontakt</strong>")}
            imageUrl={finalFlower}
            imageAlt="" />
        </Section>
      </Layout>
    </>
  )
}

export default ContactPage