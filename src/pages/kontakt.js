import * as React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import ContactForm from "../components/organisms/ContactForm/ContactForm"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import finalFlower from "../images/blue 1.svg"

const ContactPage = () => {
  const contactTitle = "Czekamy na ciebie"
  const contactInfo = "adres\nul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa\n\ngodziny otwarcia\nponiedziałek – piątek: 10.00 - 19.00\nsobota: 10.00 - 16.00\n\nkontakt\ntel. +48 519 059 013\ne-mail: kontakt@hortusdeliciarum.pl"
  const formTitle = "Napisz do nas"

  return (
    <Layout isScrollSnap title="Kontakt">
      <Section isFinal>
        <TitledParagraphWithImage
          isFinal
          title={contactTitle}
          text={contactInfo.replace("adres", "<strong>adres</strong>").replace("godziny otwarcia", "<strong>godziny otwarcia</strong>").replace("kontakt", "<strong>kontakt</strong>")}
          imageUrl={finalFlower}
          imageAlt="" />
      </Section>
      <Section>
        <ContactForm title={formTitle} />
      </Section>
    </Layout>
  )
}

export default ContactPage