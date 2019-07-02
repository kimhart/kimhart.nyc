import React from "react"
import Nav from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"

const renderResume = props => (
  <StaticQuery
    query={graphql`
      query {
        allJobsJson {
          edges {
            node {
              title
              company
              link
              current
              location
              duration
              bullets
            }
          }
        }
      }
    `}
    render={data =>
      data.allJobsJson.edges.map((job, i) => (
        console.log(job.node)
      ))
    }
  />
);



const Resume = () => {

  return (
    <Layout>
      <SEO title="Resume" />
      <div className="page page--resume">
        <Nav />
        <div className="page--resume__main">
          <h1>Now</h1>
          <h1>Then</h1>
          {renderResume()}
        </div>
      </div>
    </Layout>
  )
}

export default Resume
