import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data }) => {
  const { name, company, address } = data.site.siteMetadata.contact

  return (
    <Layout>
      <Seo title="Contact Us" />
      <h1>Contact Us</h1>
      <p>Please send all inquiries to:</p>
      <div>{company}</div>
      <div>c/o {name}</div>
      <div>{address}</div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`
