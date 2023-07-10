import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Kim Hart | Frontend Engineer",
    description: "Creative software engineer & design technologist based in Brooklyn, NY",
    twitterUsername: "@kimhart",
    image: "src/images/misc/preview-image.png",
    siteUrl: "https://kimhart.nyc",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
     __key: "images"
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en-US'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kim-hart`,
        short_name: `kimhart`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
  ]
};

export default config;
