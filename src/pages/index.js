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
            <h4>Tools & Tech</h4>
            <p>
              React (Javascript/Typescript), Less/Sass, Node/Express, Webpack,
              Docker, Grunt, Storybook, JIRA, Jenkins, Sketch, Zeplin
            </p>
            <h4>A Note</h4>
            <p>These lil guys are simplified builds of some of my work (not the completed products!) Always happy to chat in detail about the real thing. </p>
            <div className="page--home__underline" />
          </div>
          {renderProjects()}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
