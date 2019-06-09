import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FixedImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fixed(width: 540, height: 540) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fixed.originalName === props.src
      )
      if (!image) {
        return null
      }
      return <Img fixed={image.node.fixed} {...props} />
    }}
  />
)


export default FixedImage