import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Bio" />
    <h1>About me!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
