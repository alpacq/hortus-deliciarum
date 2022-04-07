import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../layout/Layout"
import Section from "../layout/Section"
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar"
import TitledParagraphWithImage from "../components/organisms/TitledParagraphWithImage/TitledParagraphWithImage"
import weddingComposition from "../images/Dominika&Bartłomiej_298 2.png"

const WeddingsPage = () => {
  const weddingsTitle = "Ślub jak z bajki"
  const weddingsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Florystyka ślubna</title>
        {/* link rel="icon" type="image/png" href={logo} sizes="32x32" /> */}
      </Helmet>
      <Layout screensHeight={1}>
        <Section>
          <NavigationBar />
          <TitledParagraphWithImage
            title={weddingsTitle}
            text={weddingsText}
            imageUrl={weddingComposition}
            imageAlt="weselna kompozycja kwiatowa" />
        </Section>
      </Layout>
    </>
  )
}

export default WeddingsPage