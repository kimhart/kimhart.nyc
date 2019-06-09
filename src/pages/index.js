import React from "react"

import Layout from "../components/layout"
import Hero from '../components/hero'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page home">
      <Hero />
      <div id="work" className="home__work">
        <div className="home__column">
          <h4>Tools I use regularly:</h4>
          <p>React (Javascript, Typescript), Less/Sass, Storybook, Webpack, Grunt, Docker, JIRA, Jenkins, Sketch, Zeplin, Prismic.io</p>
          <div className="home__underline" />
        </div>
        <div className="home__column">
          test
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
