/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, 
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: ``,
    author: `Salah Eddin AlRayess`,
    contact: {
      name: `Salah Eddin AlRayess`,
      company: `MATC Student`,
      address: `Milwaukee, WI`,
    },
  },

  plugins: [
{
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  },
},

    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}