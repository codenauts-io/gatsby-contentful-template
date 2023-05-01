import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Hero, { sizeFullScreen } from "../components/body/hero";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Hero
        size={sizeFullScreen}
        h1={t('index.title')}
        kicker={t('index.title_kicker')}
        text={t('index.title_text')}
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
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
