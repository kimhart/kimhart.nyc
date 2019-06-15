import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import useDarkMode from "use-dark-mode"


const AboutPage = () => {
  const darkMode = useDarkMode(false);

  return (
    <Layout>
      <SEO title="Bio" />
      <div className="page home">
        <Nav currentPage="about" />
      </div>
    </Layout>
  )
}

export default AboutPage
