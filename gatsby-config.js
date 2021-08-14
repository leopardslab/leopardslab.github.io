module.exports = {
  siteMetadata: {
    title: `Leopards Lab`,
    description: `Leopards Lab Website`,
    author: `@LeopardsLab`,
  },
  pathPrefix: "/leopardslab.github.io" || "/",
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
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
        display: `minimal-ui`,
      },
    }
  ],
}
