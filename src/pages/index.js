import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Kim Hart</h1>
    {/* <Image /> */}
    <Link to="/bio/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
