import * as React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import ContactForm from "../components/organisms/ContactForm/ContactForm"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import logo from "../images/Group 9.svg"
import finalFlower from "../images/blue 1.png"
import LogoTitle from "../components/atoms/LogoTitle/LogoTitle"
import MobileNavMenu from "../components/organisms/MobileNavMenu/MobileNavMenu"

const ContactPage = () => {
  const contactTitle = "Czekamy na ciebie"
  const contactInfo = "adres\nul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa\n\ngodziny otwarcia\nponiedziałek – piątek: 10.00 - 19.00\nsobota: 10.00 - 16.00\n\nkontakt\ntel. +48 519 059 013\ne-mail: kontakt@hortusdeliciarum.pl"
  const formTitle = "Napisz do nas"

  return (
    <Layout isScrollSnap title="Kontakt">
      <LogoTitle isMobile logoUrl={logo} />
      <Section isFinal isMobile>
        <MobileNavMenu isExpandable />
        <TitledParagraphWithImage
          isMobile
          isFinal
          title={contactTitle}
          text={contactInfo.replace(`ul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa`, `<a href="https://www.google.pl/maps/place/Hortus+Deliciarum+-+pracownia+florystyczna/@52.2865879,20.9376573,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecbc914681923:0x2ed7ecebd338ebd2!8m2!3d52.2865846!4d20.939846" target="_blank" rel="noopener noreferrer">ul. Jana Kasprowicza 68, lok. 3c\n01-949 Warszawa</a>`)
                           .replace("adres", "<strong>adres</strong>")
                           .replace("godziny otwarcia", "<strong>godziny otwarcia</strong>")
                           .replace("kontakt", "<strong>kontakt</strong>")}
          hasMobileButton
          mobileButtonText="skontaktuj się"
          linkUrl="/formularz"
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