import React from "react"

import Layout from "../components/layout"
import Hero from '../components/hero'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page home">
      <Hero />
      <div className="home__diagonal-overlay" />
    </div>
  </Layout>
)

export default IndexPage
