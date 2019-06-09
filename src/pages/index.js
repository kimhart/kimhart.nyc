import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import FixedImage from "../components/fixed-image"
import { StaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page home">
      <Hero />
      <div id="work" className="home__work">
        <h4>Tools I use regularly:</h4>
        <p>React (Javascript/Typescript), Less/Sass, Storybook, Webpack, Grunt, Docker, JIRA, Jenkins, Sketch, Zeplin, Prismic.io</p>
        <div className="home__underline" />
        {renderProjects()}
      </div>
    </div>
  </Layout>
)


const renderProjects = props => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              src
              alt
              title
            }
          }
        }
      }
    `}
    render={data =>
      data.allProjectsJson.edges.map((project, i) => (
        <FixedImage key={i} {...project.node} />
      ))
    }
  />
)


export default IndexPage
