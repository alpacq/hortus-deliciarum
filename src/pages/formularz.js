import * as React from "react"
import ContactForm from "../components/organisms/ContactForm/ContactForm"
import Layout from "../layout/Layout"
import Section from "../layout/Section"

const ContactFormPage = () => {
  const contactTitle = "Napisz do nas"

  return (
    <Layout isScrollSnap title="Formularz kontaktowy" screensHeight={1}>
      <Section>
        <ContactForm title={contactTitle} />
      </Section>
    </Layout>
  )
}

export default ContactFormPage