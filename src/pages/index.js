import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../layout/Layout"
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar"
import LandingFlower from "../components/atoms/LandingFlower/LandingFlower"
import LandingCircle from "../components/atoms/LandingCircle/LandingCircle"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hortus Deliciarum</title>
        {/* link rel="icon" type="image/png" href={logo} sizes="32x32" /> */}
      </Helmet>
      <Layout isGreen screensHeight={5}>
        <LandingCircle />
        <NavigationBar isGreen/>        
        <LandingFlower />
      </Layout>      
    </>
  )
}

export default IndexPage
