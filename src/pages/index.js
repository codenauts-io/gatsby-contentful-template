import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero, { sizeFullScreen } from "../components/body/hero";

const IndexPage = () => (
  <Layout>
    <Hero
      size={sizeFullScreen}
      h1={"Gatsby extra cool heading! yoyo"}
      kicker={"Extra cool subheading"}
      text={"Extra cool text → Build with it whatever you want! Do with it whatever you need! Use it for whatever you wish!"}
      links={[
        {
          id: '123',
          href: '#!',
          text: 'Download App'
        },
        {
          id: '12323',
          href: '#!',
          text: 'Check more'
        }
      ]}
    />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
