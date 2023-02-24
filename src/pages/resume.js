import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import IconLocation from "../components/icons/location"
import useDarkMode from "use-dark-mode"

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
              education
              location
              duration
              bullets
            }
          }
        }
      }
    `}
    render={data => data.allJobsJson.edges.map((edge, i) => {
      const job = edge.node;
      const darkMode = useDarkMode().value;
      return (
        <div
          key={i}
          className={`page--resume__job${job.current ? " -is-current" : ""}${
            job.education ? " -is-education" : ""
          }`}
        >
          <h2>
            <strong>{job.title}</strong> at <a target="_blank" href={job.link}>{job.company}</a>
          </h2>
          <div className="page--resume__wrap">
            <div className="page--resume__details">
              <h3>{job.duration}</h3>
              <div className="page--resume__location">
                {job.current && <IconLocation fill={darkMode ? "#A366FF" : "#FF6262"} />}
                {job.location}
              </div>
            </div>
            <div className="page--resume__bullets">
              <ul>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
      })
    }
  />
);


const Resume = () => {

  return (
    <Layout>
      <div className="page page--resume">
        <div className="page--resume__main">
          {renderResume()}
        </div>
      </div>
    </Layout>
  )
}

export default Resume
