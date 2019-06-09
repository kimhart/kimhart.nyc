import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const AboutPage = (theme) => (
  <Layout>
    <SEO title="Bio" />
    <Nav currentPage="about" theme={theme} />
    <h1>About me!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
