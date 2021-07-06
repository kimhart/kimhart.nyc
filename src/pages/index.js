import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Nav from "../components/nav"
import Project from "../components/project"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

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
              gif
              description
              link
            }
          }
        }
      }
    `}
    render={data =>
      data.allProjectsJson.edges.map((project, i) => (
        <Project key={i} {...project.node} />
      ))
    }
  />
);

const IndexPage = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  const handleScroll = () => {
    const hero = document.querySelector(".hero");
    hero && (hero.getBoundingClientRect().bottom <= 20) ?  setIsHidden(false) : setIsHidden(true);
  };

  return (
    <Layout>
      <SEO title="Hello" />
      <div className={`page page--home`}>
        <Hero />
        <Nav isHidden={isHidden} />
        <div id="projects" className="page--home__projects">
          <div className="page--home__tools">
            <h4>Current Stack & Tools</h4>
            <p>
              React, Typescript (Javascript), SCSS, CSS modules, REST APIs, 
              Stencil, Parcel, Jest, Figma, JIRA, Buildkite, Postman, Docker
            </p>
            <h4>Other stuff I can hang with</h4>
            <p>Less, Storybook, GraphQL, Webpack, Grunt/Gulp, Express/Node, Sketch, Zeplin, Jenkins, Netlify</p>
            <div className="page--home__underline" />
          </div>
          {renderProjects()}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
