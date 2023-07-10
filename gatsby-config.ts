import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
 siteMetadata: {
    title: `Kim Hart | Frontend Engineer`,
    description: `Portfolio for frontend software engineer and design technologist in Brooklyn, NY`,
    twitterUsername: `@kimhart`,
    image: `/misc/preview-image.png`,
    siteUrl: `https://www.kimhart.nyc`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
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
