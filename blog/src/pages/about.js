import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
  const { name, company } = data.site.siteMetadata.contact

  return (
    <Layout>
      <Seo title="About Us" />
      <h1>About Us</h1>
      <p>{company} was started by {name}.</p>
      <p>At {company}, we just make blogs!</p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
        }
      }
    }
  }
`
