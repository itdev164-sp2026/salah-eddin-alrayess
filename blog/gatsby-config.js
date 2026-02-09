/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

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
    spaceId: `np4ve54jrgwa`,
    accessToken: `Wr_EBZGNAORFw-4YOCceXbmWFujbv7g7hzfwjlm84WA`,
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