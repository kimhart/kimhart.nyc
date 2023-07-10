import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Kim Hart | Frontend Engineer",
    description: "Creative dev & design technologist based in Brooklyn, NY",
    twitterUsername: "@kimhart",
    image: "/preview-image.png",
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
        name: `kimhart.nyc`,
        short_name: `kimhart.nyc`,
        start_url: `/`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
  ]
};

export default config;
