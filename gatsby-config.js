module.exports = {
  siteMetadata: {
    title: `Kim Hart`,
    description: `Creative senior frontend engineer hacking on all things UX/UI: enterprise dashboard, design system + core libraries @ JW Player`,
    author: `kim_hart`,
    image: `https://ibb.co/CbBDCW3`,
  },
  pathPrefix: "/kimhart.nyc",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-less`,
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kim-hart-portfolio`,
        short_name: `kimhart`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
}
