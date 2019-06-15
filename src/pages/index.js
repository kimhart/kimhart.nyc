import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Image from "../components/image"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
// import Sunrise from "../components/icons/sunrise";

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
        <div className="home__project">
          <Image key={i} {...project.node} />
        </div>
      ))
    }
  />
)

export default class IndexPage extends React.Component {

  state = {
    theme: 'sunrise'
  }

  render() {
    const {theme} = this.state;

    return (
      <Layout>
        <SEO title="Home" />
        <div className={`page home theme-${theme}`}>
          <Hero />
          <div id="projects" className="home__projects">
            <div className="home__project tools">
              <h4>Tools I use regularly:</h4>
              <p>React (Javascript/Typescript), Less/Sass, Storybook, Webpack, Grunt, Docker, JIRA, Jenkins, Sketch, Zeplin, Prismic.io</p>
              <div className="home__underline" />
            </div>
            {renderProjects()}
          </div>
        </div>
      </Layout>
    )
  }
}
