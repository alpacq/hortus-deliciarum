import * as React from "react"
import ContactForm from "../components/organisms/ContactForm/ContactForm"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import logo from "../images/Group 9.svg"
import LogoTitle from "../components/atoms/LogoTitle/LogoTitle"

const ContactFormPage = () => {
  const contactTitle = "Napisz do nas"

  return (
    <Layout isScrollSnap title="Formularz kontaktowy" screensHeight={1}>
      <LogoTitle isMobile logoUrl={logo} />
      <Section isMobile>
        <ContactForm title={contactTitle} />
      </Section>
    </Layout>
  )
}

export default ContactFormPage