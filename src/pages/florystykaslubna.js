import * as React from "react"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import weddingComposition from "../images/Dominika&Bartłomiej_298 2.png"

const WeddingsPage = () => {
  const weddingsTitle = "Ślub jak z bajki"
  const weddingsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  return (
    <Layout title="Florystyka ślubna" screensHeight={1}>
      <Section>
        <TitledParagraphWithImage
          title={weddingsTitle}
          text={weddingsText}
          imageUrl={weddingComposition}
          imageAlt="weselna kompozycja kwiatowa" />
      </Section>
    </Layout>
  )
}

export default WeddingsPage