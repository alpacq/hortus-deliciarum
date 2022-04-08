import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../layout/Layout"
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar"
import Section from "../layout/Section"
import LongColumn from "../layout/LongColumn"
import LongTable from "../layout/LongTable"
import { Title } from "../components/atoms/Title/Title"
import { Paragraph } from "../components/atoms/Paragraph/Paragraph"
import img1col1 from "../images/IMG_9636 1.png"
import img2col1 from "../images/IMG_9637 1.png"
import img1col2 from "../images/IMG_9633 1.png"
import img2col2 from "../images/IMG_9512 1.png"
import ColImg from "../components/atoms/ColImg/ColImg"

const MeetUsPage = () => {
  const title = "O zamiłowaniu do \nsztuki i rękodzieła"
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oferta</title>
        {/* link rel="icon" type="image/png" href={logo} sizes="32x32" /> */}
      </Helmet>
      <Layout screensHeight={3.5}>
        <Section isLong>
          <NavigationBar />
          <Title isLong>{title}</Title>
          <LongTable>
            <LongColumn>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              </Paragraph>
              <ColImg imageUrl={img1col1} imageAlt="wykonywanie bukietu" />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </Paragraph>
              <ColImg imageUrl={img2col1} imageAlt="pianino otoczone kwiatami w naszej pracowni" />
            </LongColumn>
            <LongColumn>
              <ColImg imageUrl={img1col2} imageAlt="pracownia florystyczna Hortus Deliciarum" />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </Paragraph>
              <ColImg imageUrl={img2col2} imageAlt="obrazy w pracowni florystycznej Hortus Deliciarum" />
            </LongColumn>
          </LongTable>
        </Section>
      </Layout>
    </>
  )
}

export default MeetUsPage